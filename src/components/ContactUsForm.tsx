"use client";
import React, { useState, useEffect } from "react";
import { encryption, decryption } from "@/service/apiencMethod";
import Swal from 'sweetalert2';

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  inquireAbout: string;
  message: string;
  acceptTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  inquireAbout?: string;
  message?: string;
  acceptTerms?: string;
}


interface InquiryType {
  id: number;
  name: string;
  status: number;
}



// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://api.altruistworld.com';

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobileNumber: "",
    email: "",
    inquireAbout: "",
    message: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ipAddress, setIpAddress] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [inquiryTypes, setInquiryTypes] = useState<InquiryType[]>([]);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(true);
  const [inquiryLoadError, setInquiryLoadError] = useState<string | null>(null);
  console.log(submitStatus);
  // Fetch IP address when component mounts
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('Error fetching IP:', error));
  }, []);

  useEffect(() => {
    const fetchInquiryTypes = async () => {
      setIsLoadingInquiries(true);
      setInquiryLoadError(null);
      try {
        const response = await fetch('http://api.altruistworld.com/contact-us/v1/inquiry/list', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawResponse = await response.text();
        console.log('Raw Response:', rawResponse);

        const decryptedData = decryption(rawResponse);
        const parsedData = JSON.parse(decryptedData);

        if (parsedData.statusDescription.statusCode === 200) {
          const activeInquiries = parsedData.contactInquiryList.filter(
            (inquiry: InquiryType) => inquiry.status === 1
          );
          setInquiryTypes(activeInquiries);
        } else {
          throw new Error(parsedData.statusDescription.statusDescription || 'Failed to load inquiry types');
        }
      } catch (error) {
        console.error('Error in fetchInquiryTypes:', error);
        setInquiryLoadError(error instanceof Error ? error.message : 'Failed to load inquiry types');
        showErrorAlert('Failed to load inquiry types. Please refresh the page.');
      } finally {
        setIsLoadingInquiries(false);
      }
    };

    fetchInquiryTypes();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Indian mobile number validation
    // Starts with 6, 7, 8, or 9 and must be exactly 10 digits
    const indianMobileRegex = /^[6-9]\d{9}$/;
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!indianMobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid Indian mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.inquireAbout) {
      newErrors.inquireAbout = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    // Only allow numbers
    const numbersOnly = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const truncatedValue = numbersOnly.slice(0, 10);
    
    setFormData(prev => ({ ...prev, mobileNumber: truncatedValue }));
    
    // Clear error when user starts typing
    if (errors.mobileNumber) {
      setErrors(prev => ({ ...prev, mobileNumber: undefined }));
    }
  };

  const showResponseAlert = (statusCode: number, message: string) => {
    switch (statusCode) {
      case 200:
        return Swal.fire({
          title: 'Success!',
          text: message,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
          timer: 5000,
          timerProgressBar: true
        });
      case 400:
        return Swal.fire({
          title: 'Invalid Request',
          text: message,
          icon: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#f8bb86'
        });
      case 500:
        return Swal.fire({
          title: 'Server Error',
          text: message,
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#d33'
        });
      default:
        return Swal.fire({
          title: 'Info',
          text: message,
          icon: 'info',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        });
    }
  };

  const showErrorAlert = (message: string) => {
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#d33'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Show loading state
      Swal.fire({
        title: 'Submitting...',
        html: 'Please wait while we process your request.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      try {
        const headerDetails = navigator.userAgent;

        // Find the selected inquiry type by name
        const selectedInquiry = inquiryTypes.find(
          type => type.name.toLowerCase() === formData.inquireAbout.toLowerCase()
        );

        if (!selectedInquiry) {
          throw new Error('Invalid inquiry type selected');
        }

        const rawPayload = {
          name: formData.fullName,
          emailId: formData.email,
          phoneNumber: formData.mobileNumber,
          inquiryAboutId: selectedInquiry.id,
          message: formData.message,
          ipAddress: ipAddress || "0.0.0.0",
          headerDetails: headerDetails
        };

        console.log('Raw Payload:', rawPayload);

        let encryptedPayload;
        try {
          encryptedPayload = encryption(JSON.stringify(rawPayload));
          console.log('Encrypted Payload:', encryptedPayload);
        } catch (encError) {
          console.error('Encryption Error:', encError);
          throw new Error('Failed to encrypt data');
        }

        const response = await fetch('http://api.altruistworld.com/contact-us/v1/save', {
          method: 'POST',
          body: encryptedPayload
        });

        console.log('Response Status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error Response:', errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawResponse = await response.text();
        console.log('Raw Response:', rawResponse);

        let decryptedResponse;
        try {
          decryptedResponse = decryption(rawResponse);
          console.log('Decrypted Response:', decryptedResponse);
        } catch (decError) {
          console.error('Decryption Error:', decError);
          throw new Error('Failed to decrypt response');
        }

        let responseData;
        try {
          responseData = JSON.parse(decryptedResponse);
          console.log('Parsed Response:', responseData);
        } catch (parseError) {
          console.error('Parse Error:', parseError);
          throw new Error('Failed to parse response');
        }

        if (responseData.statusDescription) {
          const { statusCode, statusDescription } = responseData.statusDescription;
          showResponseAlert(statusCode, statusDescription);
          
          if (statusCode === 200) {
            setFormData({
              fullName: "",
              mobileNumber: "",
              email: "",
              inquireAbout: "",
              message: "",
              acceptTerms: false,
            });
            setSubmitStatus('success');
          }
        } else {
          throw new Error('Invalid response format');
        }

      } catch (error) {
        console.error('Error in handleSubmit:', error);
        setSubmitStatus('error');
        showErrorAlert(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Show validation error message
      showResponseAlert(400, 'Please fill in all required fields correctly.');
    }
  };

  return (
    <div className="form-containe unique_container container">
      <form onSubmit={handleSubmit} className="contact-form mx-auto">
        <div className="form-group">
          <label htmlFor="fullName">Full Name <span style={{color: 'red'}}>*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "error" : ""}
          />
          {errors.fullName && (
            <span className="error-message">{errors.fullName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number <span style={{color: 'red'}}>*</span></label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleMobileNumberChange}
            className={errors.mobileNumber ? "error" : ""}
            placeholder=""
            maxLength={10}
            pattern="[6-9][0-9]{9}"
            title="Please enter valid Indian mobile number"
          />
          {errors.mobileNumber && (
            <span className="error-message">{errors.mobileNumber}</span>
          )}
          {/* <small className="form-text text-muted">
            Mobile number should start with 6, 7, 8, or 9 and be 10 digits long
          </small> */}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail Address <span style={{color: 'red'}}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <select
            id="inquireAbout"
            name="inquireAbout"
            value={formData.inquireAbout}
            onChange={handleChange}
            className={`form-select ${errors.inquireAbout ? "error" : ""}`}
            disabled={isLoadingInquiries}
          >
            <option value="">
              {isLoadingInquiries 
                ? "Loading..." 
                : inquiryLoadError 
                  ? "Failed to load options" 
                  : "Inquire About"}
            </option>
            {!isLoadingInquiries && !inquiryLoadError && inquiryTypes.map((type) => (
              <option 
                key={type.id} 
                value={type.name.toLowerCase()}
              >
                {type.name}
              </option>
            ))}
          </select>
          {inquiryLoadError && (
            <span className="error-message">{inquiryLoadError}</span>
          )}
          {errors.inquireAbout && (
            <span className="error-message">{errors.inquireAbout}</span>
          )}
        </div>

        <div className="form-group mt-4 pt-2">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input className="rounded-0"
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  acceptTerms: e.target.checked,
                }))
              }
            />
            I accept the Terms
          </label>
          {errors.acceptTerms && (
            <span className="error-message">{errors.acceptTerms}</span>
          )}
        </div>

        <button type="submit" className="submit-button rounded-0 mt-3" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
