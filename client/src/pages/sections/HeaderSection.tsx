import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const mainNavItems = [
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Team", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const secondaryNavItems = [
    {
      label: "Blog",
      href: "#",
      icon: "/figmaAssets/union-1.svg",
    },
    {
      label: "Get in touch",
      href: "#",
      icon: "/figmaAssets/icon-calendar.svg",
    },
  ];

  return (
    <header className="flex flex-col items-center gap-3 bg-black-900 w-full">
      <div className="flex flex-col items-center gap-1.5 py-9 w-full bg-black-900">
        <Card className="w-full max-w-[943px] h-[82.5px] rounded-[17.7px] border-[1.47px] border-[#282828] overflow-hidden bg-transparent">
          <CardContent className="flex items-start p-0 h-full">
            <img className="h-full" alt="Logo" src="/figmaAssets/logo.svg" />

            <div className="flex flex-col items-start flex-1 h-full">
              {/* Top navigation row */}
              <div className="flex items-start w-full flex-1 border-b-[1.47px] border-[#282828]">
                <div className="flex-1 h-full border-r-[1.47px] border-[#282828]">
                  <NavigationMenu className="relative top-3 left-[200px]">
                    <NavigationMenuList className="flex gap-[29.5px]">
                      {mainNavItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink className="text-black-300 text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px]">
                            {item.label}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
                <div className="w-[171px] h-full relative">
                  <img
                    className="absolute w-[53px] h-[11px] top-[15px] left-[59px]"
                    alt="Union"
                    src="/figmaAssets/union-3.svg"
                  />
                </div>
              </div>

              {/* Bottom navigation row */}
              <div className="flex items-start w-full flex-1">
                {secondaryNavItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center flex-1 h-full ${
                      index === 0 ? "border-r-[1.47px] border-[#282828]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-[2.95px]">
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
                      <span className="text-black-300 text-[10.3px] font-normal font-['Inter',Helvetica] leading-[17.7px] mt-[-0.74px]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-[53px] pb-[29.5px]">
        <h1 className="w-[830px] mt-[-0.74px] font-display-01 text-white text-center text-[length:var(--display-01-font-size)] tracking-[var(--display-01-letter-spacing)] leading-[var(--display-01-line-height)]">
          Krate design and motion studio
        </h1>

        <img
          className="w-full max-w-[943px] h-[450px]"
          alt="Video"
          src="/figmaAssets/video.svg"
        />
      </div>
    </header>
  );
};
