import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items data
  const mainNavItems = [
    { label: "Hizmetler", href: "#services", testId: "nav-services" },
    { label: "Projeler", href: "#projects", testId: "nav-projects" },
    { label: "Ekip", href: "#team", testId: "nav-team" },
    { label: "İletişim", href: "#contact", testId: "nav-contact" },
  ];

  const secondaryNavItems = [
    {
      label: "Blog",
      href: "#blog",
      icon: "/figmaAssets/union-1.svg",
      testId: "nav-blog",
    },
    {
      label: "Get in touch",
      href: "#contact",
      icon: "/figmaAssets/icon-calendar.svg",
      testId: "nav-get-in-touch",
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex flex-col items-center bg-black-900 w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-col items-center gap-1.5 py-4 lg:py-9 w-full bg-black-900 px-4">
        <Card className="w-full max-w-[943px] h-auto lg:h-[82.5px] rounded-[17.7px] border-[1.47px] border-[#282828] overflow-hidden bg-transparent">
          <CardContent className="flex flex-col lg:flex-row items-start p-0 h-full">
            <div className="flex items-center justify-center p-4 lg:p-0">
              <img 
                className="h-10 lg:h-full w-auto" 
                alt="Logo" 
                src="/figmaAssets/logo.svg" 
                data-testid="logo"
              />
            </div>

            <div className="flex flex-col items-start flex-1 h-full w-full lg:w-auto">
              {/* Top navigation row */}
              <div className="flex items-center w-full flex-1 border-b-[1.47px] border-[#282828] px-4 lg:px-0">
                <div className="flex-1 h-full lg:border-r-[1.47px] border-[#282828] flex items-center justify-center lg:justify-start">
                  <NavigationMenu className="relative lg:left-[200px]">
                    <NavigationMenuList className="flex flex-wrap gap-4 lg:gap-[29.5px] py-4 lg:py-0">
                      {mainNavItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink 
                            href={item.href}
                            className="text-black-300 text-sm lg:text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px] hover:text-white transition-colors"
                            data-testid={item.testId}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
                <div className="hidden lg:block w-[171px] h-full relative">
                  <img
                    className="absolute w-[53px] h-[11px] top-[15px] left-[59px]"
                    alt="Union"
                    src="/figmaAssets/union-3.svg"
                  />
                </div>
              </div>

              {/* Bottom navigation row */}
              <div className="flex items-center w-full flex-1 px-4 lg:px-0">
                {secondaryNavItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center flex-1 h-full py-4 lg:py-0 ${
                      index === 0 ? "border-r-[1.47px] border-[#282828]" : ""
                    }`}
                  >
                    <a 
                      href={item.href}
                      className="flex items-center gap-[2.95px] hover:opacity-80 transition-opacity"
                      data-testid={item.testId}
                    >
                      {item.label === "Blog" ? (
                        <div className="relative w-[13.27px] h-[13.27px]">
                          <img
                            className="absolute w-[9px] h-[9px] top-0.5 left-0.5"
                            alt="Union"
                            src={item.icon}
                          />
                        </div>
                      ) : (
                        <img
                          className="w-[13.27px] h-[13.27px]"
                          alt="Icon calendar"
                          src={item.icon}
                        />
                      )}
                      <span className="text-black-300 text-sm lg:text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px]">
                        {item.label}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full bg-black-900 border-b border-[#282828]">
        <div className="flex items-center justify-between p-4">
          <img 
            className="h-8 w-auto" 
            alt="Logo" 
            src="/figmaAssets/logo.svg" 
            data-testid="mobile-logo"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-[#282828]"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="border-t border-[#282828] bg-black-900" data-testid="mobile-menu">
            <nav className="flex flex-col p-4 space-y-4">
              {mainNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-black-300 text-base font-normal hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-${item.testId}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-[#282828] pt-4 mt-4">
                {secondaryNavItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-black-300 text-base font-normal hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-${item.testId}`}
                  >
                    <img
                      className="w-4 h-4"
                      alt={item.label}
                      src={item.icon}
                    />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col w-full items-center justify-center gap-8 lg:gap-[53px] pb-8 lg:pb-[29.5px] px-4">
        <h1 className="w-full max-w-[830px] mt-10 font-display-01 text-white text-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tight lg:tracking-[var(--display-01-letter-spacing)] leading-tight lg:leading-[var(--display-01-line-height)]">
          Çamlıca Reklam Ajansı.
        </h1>

        <div className="w-full max-w-[943px] aspect-video lg:h-[450px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            alt="Video"
            src="/figmaAssets/video.svg"
            data-testid="hero-video"
          />
        </div>
      </div>
    </header>
  );
};
