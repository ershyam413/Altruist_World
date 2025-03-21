// /* eslint-disable @typescript-eslint/no-explicit-any */
// import AboutSection from "@/components/AboutSection";
// import HeroSection from "@/components/HeroSection";
// import React from "react";
// import ServicesSection from "@/components/ServicesSection";
// import ContactSection from "@/components/ContactSection";
// import TechnologySection from "@/components/TechnologySection";
// import WorkSection from "@/components/WorkSection";
// import { getData } from "@/service/sheetService";
// import { BASE_URL, HOME_ID } from "@/config/constant";

// export async function generateMetadata() {
//   try {
//     const seores: any = await getData(HOME_ID);
//     const pageSEO = seores?.seo;
//     console.log("pageSEO", pageSEO);
//     return {
//       metadataBase: new URL(BASE_URL),
//       title: pageSEO?.title || "Atlruist World",
//       description: pageSEO?.description || "Default description",
//       keywords: pageSEO?.keyword || "Atlruist World",
//       alternates: {
//         canonical: pageSEO?.Canonical_url || "https://cmoaxis.com/",
//       },
//       openGraph: {
//         title: pageSEO?.title || "Atlruist World",
//         description: pageSEO?.description || "Default description",
//         url: BASE_URL,
//         siteName: "Atlruist World",
//         images: [],
//         locale: "en_US",
//         type: "website",
//       },
//     };
//   } catch (error) {
//     console.log("error", error);
//     return {
//       metadataBase: new URL(BASE_URL),
//       title: "Atlruist World",
//       description: "Default description",
//     };
//   }
// }
// export default function Page() {
//   return (
//     <>
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <TechnologySection />
//       <WorkSection />
//       <ContactSection />
//     </>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import React from "react";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import TechnologySection from "@/components/TechnologySection";
import WorkSection from "@/components/WorkSection";
import { getData } from "@/service/sheetService";
import { BASE_URL, HOME_ID } from "@/config/constant";

export async function generateMetadata() {
  try {
    const seoResponse: any = await getData(HOME_ID);
    const pageSEO = seoResponse?.seo?.[0]; // Access the first item in the array
    console.log("seoResponse", pageSEO);

    if (!pageSEO) {
      throw new Error("SEO data not found");
    }

    return {
      metadataBase: new URL(BASE_URL),
      title: pageSEO.title || "Altruist World",
      description: pageSEO.description || "Default description",
      keywords: pageSEO.keyword || "Altruist World",
      alternates: {
        canonical: pageSEO.Canonical_url || "https://www.altruistindia.com/",
      },
      openGraph: {
        title: pageSEO.title || "Altruist World",
        description: pageSEO.description || "Default description",
        url: BASE_URL,
        siteName: "Altruist World",
        images: [
          {
            url:
              pageSEO.og_image ||
              "https://www.altruistindia.com/default-og-image.jpg",
            width: 1200,
            height: 630,
            alt: pageSEO.title || "Altruist World",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: pageSEO.title || "Altruist World",
        description: pageSEO.description || "Default description",
        images: [
          pageSEO.og_image ||
            "https://www.altruistindia.com/default-og-image.jpg",
        ],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    // Fallback SEO data
    return {
      metadataBase: new URL(BASE_URL),
      title: "Altruist World",
      description: "Leading provider of telecom solutions and services",
      keywords: "Telecom solutions, network planning, network operations",
      alternates: {
        canonical: "https://www.altruistindia.com/",
      },
      openGraph: {
        title: "Altruist World",
        description: "Leading provider of telecom solutions and services",
        url: BASE_URL,
        siteName: "Altruist World",
        images: [
          {
            url: "https://www.altruistindia.com/default-og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Altruist World",
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  }
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
