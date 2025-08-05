import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Team", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="flex flex-col items-center py-14 bg-black-900 w-full">
      <Card className="w-full max-w-[943px] rounded-[23.58px] border-[1.47px] border-solid border-[#282828] overflow-hidden">
        <CardContent className="p-0 flex flex-row">
          {/* Logo Section */}
          <div className="w-[219.62px] border-r-[1.47px] border-solid border-[#282828] flex items-center justify-center">
            <div className="relative w-[102px] h-[31px]">
              <img
                className="w-[95px] h-[22px]"
                alt="Clonify Logo"
                src="/figmaAssets/union.svg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1">
            {/* Top Row */}
            <div className="flex border-b-[1.47px] border-solid border-[#282828]">
              {/* Navigation Links */}
              <div className="flex-1 border-r-[1.47px] border-solid border-[#282828] py-7">
                <nav className="flex items-center gap-[29.48px] ml-[67px]">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-black-300 text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Email Section */}
              <div className="w-[359.64px] flex items-center justify-center">
                <a
                  href="mailto:hello@clonify.io"
                  className="font-heading-06 text-black-300 text-center whitespace-nowrap"
                >
                  hello@clonify.io
                </a>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex">
              {/* Blog Link */}
              <div className="flex-1 border-r-[1.47px] border-solid border-[#282828] flex items-center justify-center">
                <a href="#" className="flex items-center gap-[2.95px]">
                  <div className="relative w-[13.27px] h-[13.27px]">
                    <img
                      className="absolute w-[9px] h-[9px] top-0.5 left-0.5"
                      alt="Blog Icon"
                      src="/figmaAssets/union-1.svg"
                    />
                  </div>
                  <span className="text-black-300 text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px]">
                    Blog
                  </span>
                </a>
              </div>

              {/* Social Media Section */}
              <div className="flex-1 border-r-[1.47px] border-solid border-[#282828] flex items-center justify-center">
                <img
                  className="h-full"
                  alt="Social Media Icons"
                  src="/figmaAssets/col-02.svg"
                />
              </div>

              {/* Copyright Section */}
              <div className="flex-1 flex items-center justify-center">
                <span className="font-text-14px-regular text-black-300 text-center whitespace-nowrap">
                  © 2088 Nayzak Design
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
