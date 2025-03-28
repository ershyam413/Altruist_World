/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        <meta
          property="og:image"
          content="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742387881498altruist-logo.png"
        />
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>

      </head>
      <body className='m-0' id="google-doc-content">
        <section className="data">
          <div className="container-fluid px-0">
            <div className="ro flex-column-revers flex-md-ro">
              <div className="col-md-">
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
              </div>
            </div>
          </div>
        </section>
      </body>
      {/* <Script src="https://code.jquery.com/jquery-3.7.1.min.js"/> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/script.js" async={true} />
    </html>
  );
}
