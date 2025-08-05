import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { TeamSection } from "./sections/TeamSection";

export const Homepage = (): JSX.Element => {
  // Services data for mapping
  const services = [
    { name: "Web & Mobile Design", color: "bg-blue-500" },
    { name: "Brand Identity", color: "bg-purple-500" },
    { name: "App Development", color: "bg-pink-500" },
    { name: "Consultancy", color: "bg-red-500" },
    { name: "Packaging", color: "bg-green-500" },
  ];

  // Portfolio projects data
  const portfolioProjects = [
    {
      title: "Project Harmony",
      image: "/figmaAssets/portfolio-1.png",
    },
    {
      title: "Green Waves Inc",
      image: "/figmaAssets/portfolio-2.png",
    },
    {
      title: "Modern Patterns",
      image: "/figmaAssets/portfolio-3.png",
    },
    {
      title: "Cream Check",
      image: "/figmaAssets/portfolio-4.png",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-black-900 overflow-hidden min-h-screen">
      <HeaderSection />

      <section className="flex flex-col w-full max-w-[1061.23px] items-center justify-center gap-6 lg:gap-[23.58px] px-4 sm:px-8 lg:px-[58.96px] py-12 lg:py-[88.44px] relative bg-black-900" id="about">
        <div className="flex flex-col lg:flex-row w-full max-w-[943.32px] items-center justify-center lg:justify-end gap-8 lg:gap-[47.17px] relative">
          <div className="flex flex-col w-full lg:max-w-[577.05px] items-start justify-center gap-6 lg:gap-[23.58px] relative">
            <p className="relative self-stretch mt-[-0.74px] font-heading-05 font-[number:var(--heading-05-font-weight)] text-black-100 text-xl sm:text-2xl lg:text-[length:var(--heading-05-font-size)] tracking-tight lg:tracking-[var(--heading-05-letter-spacing)] leading-relaxed lg:leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
              We are passionate about creating visually stunning and functional
              solutions that communicate effectively. I have a keen eye for
              detail and a deep understanding of design principles, which I use
              to deliver projects that exceed my clients' expectations.
            </p>
          </div>

          <div className="w-full lg:flex-1 lg:grow flex justify-center">
            <img
              className="w-full max-w-md lg:max-w-none h-auto"
              alt="Logos"
              src="/figmaAssets/logos.svg"
              data-testid="company-logos"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1061.23px] px-4">
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-black-900 border-none" data-testid={`service-${index}`}>
              <CardContent className="flex items-center p-2 lg:p-3">
                <div
                  className={`w-3 h-3 rounded-full ${service.color} mr-2 flex-shrink-0`}
                ></div>
                <span className="text-black-100 font-text-14px-regular text-sm lg:text-[length:var(--text-14px-regular-font-size)] whitespace-nowrap">
                  {service.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1061.23px] mb-8 px-4" id="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black-900 border-none overflow-hidden hover:border-[#282828] transition-all duration-300 group"
              data-testid={`portfolio-project-${index}`}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-black-100 font-text-14px-regular text-base lg:text-lg">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
