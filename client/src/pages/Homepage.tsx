import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { TeamSection } from "./sections/TeamSection";

export const Homepage = (): JSX.Element => {
  // Services data from CMLC website
  const services = [
    { name: "Google ADS", color: "bg-blue-500", icon: "🎯" },
    { name: "Grafik Tasarım", color: "bg-purple-500", icon: "🎨" },
    { name: "Video ve Animasyon", color: "bg-pink-500", icon: "🎬" },
    { name: "SEO", color: "bg-green-500", icon: "🔍" },
    { name: "Web Tasarım", color: "bg-orange-500", icon: "💻" },
    { name: "Sosyal Medya Yönetimi", color: "bg-red-500", icon: "📱" },
  ];

  // Portfolio projects data based on CMLC services
  const portfolioProjects = [
    {
      title: "Google Ads Kampanyası",
      description: "Dijital medyada etkili reklam çözümleri",
      image: "/figmaAssets/portfolio-1.png",
      category: "Digital Marketing"
    },
    {
      title: "Kurumsal Web Design",
      description: "Modern ve kullanıcı dostu web tasarımları",
      image: "/figmaAssets/portfolio-2.png",
      category: "Web Design"
    },
    {
      title: "Sosyal Medya Kampanyası",
      description: "Sosyal medyada marka bilinirliği artırma",
      image: "/figmaAssets/portfolio-3.png",
      category: "Social Media"
    },
    {
      title: "Video Prodüksiyon",
      description: "Profesyonel video ve animasyon hizmetleri",
      image: "/figmaAssets/portfolio-4.png",
      category: "Video Production"
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-black-900 overflow-hidden min-h-screen">
      <HeaderSection />

      <section className="flex flex-col w-full max-w-[1061.23px] items-center justify-center gap-6 lg:gap-[23.58px] px-4 sm:px-8 lg:px-[58.96px] py-12 lg:py-[88.44px] relative bg-black-900" id="about">
        <div className="flex flex-col lg:flex-row w-full max-w-[943.32px] items-center justify-center lg:justify-end gap-8 lg:gap-[47.17px] relative">
          <div className="flex flex-col w-full lg:max-w-[577.05px] items-start justify-center gap-6 lg:gap-[23.58px] relative">
            <p className="relative self-stretch mt-[-0.74px] font-heading-05 font-[number:var(--heading-05-font-weight)] text-black-100 text-xl sm:text-2xl lg:text-[length:var(--heading-05-font-size)] tracking-tight lg:tracking-[var(--heading-05-letter-spacing)] leading-relaxed lg:leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
              Çamlıca Reklam Ajansı olarak dijital medyanın sınırlarını sizin için yeniden çiziyoruz! 
              Dijital dünyada markanızı öne çıkaracak yaratıcı çözümler sunuyoruz.
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

      <section className="w-full max-w-[1061.23px] px-4" id="services">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">Hizmetlerimiz</h2>
          <p className="text-black-300 text-base lg:text-lg">Dijital dünyada ihtiyacınız olan tüm hizmetler</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-black-900 border border-[#282828] hover:border-white/20 transition-all duration-300 group cursor-pointer" data-testid={`service-${index}`}>
              <CardContent className="flex flex-col items-center text-center p-6 lg:p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${service.color} mb-3 flex-shrink-0`}
                ></div>
                <h3 className="text-black-100 font-semibold text-base lg:text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-black-400 text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Profesyonel {service.name.toLowerCase()} hizmetleri
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1061.23px] mb-12 px-4" id="projects">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">Projelerimiz</h2>
          <p className="text-black-300 text-base lg:text-lg">Başarılı dijital kampanyalarımızdan örnekler</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black-900 border border-[#282828] overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer"
              data-testid={`portfolio-project-${index}`}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-black-100 font-semibold text-base lg:text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black-400 text-sm lg:text-base">
                    {project.description}
                  </p>
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
