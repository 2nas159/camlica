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
    <div className="flex flex-col items-center relative bg-black-900 overflow-hidden">
      <HeaderSection />

      <section className="flex flex-col w-full max-w-[1061.23px] items-center justify-center gap-[23.58px] px-[58.96px] py-[88.44px] relative bg-black-900">
        <div className="flex w-full max-w-[943.32px] items-center justify-end gap-[47.17px] relative">
          <div className="flex flex-col w-full max-w-[577.05px] items-start justify-center gap-[23.58px] relative">
            <p className="relative self-stretch mt-[-0.74px] font-heading-05 font-[number:var(--heading-05-font-weight)] text-black-100 text-[length:var(--heading-05-font-size)] tracking-[var(--heading-05-letter-spacing)] leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
              We are passionate about creating visually stunning and functional
              solutions that communicate effectively. I have a keen eye for
              detail and a deep understanding of design principles, which I use
              to deliver projects that exceed my clients&#39; expectations.
            </p>
          </div>

          <img
            className="relative flex-1 grow"
            alt="Logos"
            src="/figmaAssets/logos.svg"
          />
        </div>
      </section>

      <section className="w-full max-w-[1061.23px]">
        <div className="flex flex-wrap gap-4 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-black-900 border-none">
              <CardContent className="flex items-center p-3">
                <div
                  className={`w-3 h-3 rounded-full ${service.color} mr-2`}
                ></div>
                <span className="text-black-100 font-text-14px-regular text-[length:var(--text-14px-regular-font-size)]">
                  {service.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1061.23px] mb-8">
        <div className="grid grid-cols-2 gap-4">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black-900 border-none overflow-hidden"
            >
              <CardContent className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-black-100 font-text-14px-regular">
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
