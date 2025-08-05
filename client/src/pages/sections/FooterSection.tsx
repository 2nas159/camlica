import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { label: "Hizmetler", href: "#services" },
    { label: "Projeler", href: "#projects" },
    { label: "Ekip", href: "#team" },
    { label: "İletişim", href: "#contact" },
  ];

  return (
    <footer className="flex flex-col items-center py-8 lg:py-14 bg-black-900 w-full min-w-[680px]">
      <div className="w-full max-w-[1400px] min-w-[680px] px-4">
        <Card className="w-full rounded-[23.58px] border-[1.47px] border-solid border-[#282828] overflow-hidden">
        <CardContent className="p-0 flex flex-col lg:flex-row">
          {/* Logo Section */}
          <div className="w-full lg:w-[219.62px] lg:border-r-[1.47px] border-b-[1.47px] lg:border-b-0 border-solid border-[#282828] flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-[150px] h-[46px]">
              <img
                className="h-full w-full object-contain"
                alt="Clonify Logo"
                src="/figmaAssets/logo.svg"
                data-testid="footer-logo"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1">
            {/* Top Row */}
            <div className="flex flex-col lg:flex-row border-b-[1.47px] border-solid border-[#282828]">
              {/* Navigation Links */}
              <div className="flex-1 lg:border-r-[1.47px] border-solid border-[#282828] py-4 lg:py-7">
                <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-[29.48px] px-4 lg:px-[67px]">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-black-300 text-sm lg:text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px] hover:text-white transition-colors"
                      data-testid={`footer-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Email Section */}
              <div className="w-full lg:w-[359.64px] flex items-center justify-center py-4 lg:py-0 border-t-[1.47px] lg:border-t-0 border-solid border-[#282828]">
                <a
                  href="mailto:info@cmlc.com.tr"
                  className="font-heading-06 text-black-300 text-center text-base lg:text-[length:var(--heading-06-font-size)] hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  info@cmlc.com.tr
                </a>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row">
              {/* Blog Link */}
              <div className="flex-1 sm:border-r-[1.47px] border-b-[1.47px] sm:border-b-0 border-solid border-[#282828] flex items-center justify-center py-4">
                <a href="#blog" className="flex items-center gap-[2.95px] hover:opacity-80 transition-opacity" data-testid="footer-blog-link">
                  <div className="relative w-[13.27px] h-[13.27px]">
                    <img
                      className="absolute w-[9px] h-[9px] top-0.5 left-0.5"
                      alt="Blog Icon"
                      src="/figmaAssets/union-1.svg"
                    />
                  </div>
                  <span className="text-black-300 text-sm lg:text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px]">
                    Blog
                  </span>
                </a>
              </div>

              {/* Social Media Section */}
              <div className="flex-1 sm:border-r-[1.47px] border-b-[1.47px] sm:border-b-0 border-solid border-[#282828] flex items-center justify-center py-4">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/cmlc.com.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    data-testid="footer-social-instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-black-300 hover:text-white transition-colors">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/90979263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    data-testid="footer-social-linkedin"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-black-300 hover:text-white transition-colors">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/camlicaadvertising"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:opacity-80 transition-opacity"
                    data-testid="footer-social-facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-black-300 hover:text-white transition-colors">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="flex-1 flex items-center justify-center py-4">
                <span className="font-text-14px-regular text-black-300 text-center text-sm lg:text-[length:var(--text-14px-regular-font-size)]" data-testid="footer-copyright">
                  © 2025 Çamlıca Reklam LTD.
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </footer>
  );
};
