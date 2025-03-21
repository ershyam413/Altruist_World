/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
export const metadata: Metadata = {
  title: "CMO",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon_02.svg" />
        <link rel="shortcut icon" href="/assets/images/favicon_02.svg" />
        <link rel="apple-touch-icon" href="/assets/images/favicon_02.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <meta
          property="og:image"
          content="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742387881498altruist-logo.png"
        />
      </head>
      <body id="google-doc-content">
        <section className="data">
          {/* <div className="container-fluid">
            <div className="row flex-column-reverse flex-md-row"> */}
          {/* <div className="col-md-7"> */}
          <Header />
          <div className="box">
            {children}
            {/* <div className="footer d-flex align-items-center">
                    {footerMenu?.map((e:any,index:number) => {
                      return(
                        <Link key={`footerMenu${index}`} href={e?.href} className="d-flex align-items-center"><img src={e?.icon} alt={e?.label} />{e?.label}</Link>
                      )
                    })}
                  </div> */}
          </div>
          <Footer />
          {/* </div> */}
          {/* </div>
          </div> */}
        </section>
      </body>
      {/* <Script src="https://code.jquery.com/jquery-3.7.1.min.js"/> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/script.js" async={true} />
    </html>
  );
}
