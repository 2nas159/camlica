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
    <footer className="flex flex-col items-center py-8 lg:py-14 bg-black-900 w-full px-4">
      <Card className="w-full max-w-[943px] rounded-[23.58px] border-[1.47px] border-solid border-[#282828] overflow-hidden">
        <CardContent className="p-0 flex flex-col lg:flex-row">
          {/* Logo Section */}
          <div className="w-full lg:w-[219.62px] lg:border-r-[1.47px] border-b-[1.47px] lg:border-b-0 border-solid border-[#282828] flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-[102px] h-[31px]">
              <img
                className="w-[95px] h-[22px]"
                alt="Clonify Logo"
                src="/figmaAssets/union.svg"
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
                <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-[29.48px] lg:ml-[67px]">
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
                <img
                  className="h-6 lg:h-auto max-h-8 w-auto"
                  alt="Social Media Icons"
                  src="/figmaAssets/col-02.svg"
                  data-testid="footer-social-icons"
                />
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
    </footer>
  );
};
