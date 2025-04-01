"use client";
import React, { useState } from "react";

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Add your form submission logic here
        console.log("Form submitted:", formData);
        // Reset form after successful submission
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          inquireAbout: "",
          message: "",
          acceptTerms: false,
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="form-containe unique_container container">
      <form onSubmit={handleSubmit} className="contact-form mx-auto">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
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
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className={errors.mobileNumber ? "error" : ""}
          />
          {errors.mobileNumber && (
            <span className="error-message">{errors.mobileNumber}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
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
          {/* <label htmlFor="inquireAbout">Inquire About</label> */}
          <select
            id="inquireAbout"
            name="inquireAbout"
            value={formData.inquireAbout}
            onChange={handleChange}
            // className={errors.inquireAbout ? "error" : ""}
            className='form-select rounded-0'
          >
            <option value="">Inquire About</option>
            <option value="technology">Technology</option>
            <option value="marketing">Marketing & Advertising</option>
            <option value="lastMile">Last Mile</option>
            <option value="kpoBpo">KPO/BPO</option>
            <option value="hospitality">Hospitality</option>
          </select>
          {errors.inquireAbout && (
            <span className="error-message">{errors.inquireAbout}</span>
          )}
        </div>

        <div className="form-group mt-4">
          {/* <label htmlFor="message">Message</label> */}
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
