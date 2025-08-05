import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";

export const Homepage = (): JSX.Element => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Company logos data
  const companyLogos = [
    { src: "/figmaAssets/aras-logo.png", alt: "Company 1" },
    { src: "/figmaAssets/peu-logo.png", alt: "Company 2" },
    { src: "/figmaAssets/kia-logo.png", alt: "Company 3" },
    { src: "/figmaAssets/koc-logo.png", alt: "Company 4" },
    { src: "/figmaAssets/hurriyet-logo.png", alt: "Company 5" },
    { src: "/figmaAssets/fiat-logo.png", alt: "Company 6" },
    { src: "/figmaAssets/emlak-konut-logo.png", alt: "Company 7" },
    { src: "/figmaAssets/opel-logo.png", alt: "Company 8" },
  ];

  // Client-side mounting check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto carousel effect for mobile and tablet
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we reach the original array length for seamless loop
        return nextIndex >= companyLogos.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient, companyLogos.length]);

  // Portfolio projects data based on CMLC services
  const portfolioProjects = [
    {
      title: "CITROEN",
      description: "Dijital medyada etkili reklam çözümleri",
      image: "/figmaAssets/citroen.jpg",
      category: "Digital Marketing",
    },
    {
      title: "OPEL",
      description: "Modern ve kullanıcı dostu web tasarımları",
      image: "/figmaAssets/opel.jpg",
      category: "Web Design",
    },
    {
      title: "KIA",
      description: "Sosyal medyada marka bilinirliği artırma",
      image: "/figmaAssets/kia.jpg",
      category: "Social Media",
    },
    {
      title: "KIA",
      description: "Profesyonel video ve animasyon hizmetleri",
      image: "/figmaAssets/kia2.jpg",
      category: "Video Production",
    },
  ];

  // Get visible logos for carousel
  const getVisibleLogos = () => {
    const visibleCount = window.innerWidth >= 768 ? 3 : 2;
    const logos = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentLogoIndex + i) % companyLogos.length;
      logos.push(companyLogos[index]);
    }
    return logos;
  };

  return (
    <div className="flex flex-col items-center relative bg-black-900 overflow-hidden min-h-screen">
      <HeaderSection />

      {/* Hero Section */}
      <section
        className="flex flex-col w-full max-w-[1400px] min-w-[320px] items-center justify-center gap-6 lg:gap-[23.58px] px-4 py-12 lg:py-[88.44px] relative bg-black-900 animate-on-scroll animate-fade-up"
        id="about"
      >
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-end gap-8 lg:gap-[47.17px] relative animate-on-scroll animate-fade-left">
          <div className="flex flex-col w-full lg:max-w-[577.05px] items-start justify-center gap-6 lg:gap-[23.58px] relative">
            <p className="relative self-stretch mt-[-0.74px] font-heading-05 font-[number:var(--heading-05-font-weight)] text-black-100 text-xl sm:text-2xl lg:text-[length:var(--heading-05-font-size)] tracking-tight lg:tracking-[var(--heading-05-letter-spacing)] leading-relaxed lg:leading-[var(--heading-05-line-height)] [font-style:var(--heading-05-font-style)]">
              Çamlıca Reklam Ajansı olarak dijital medyanın sınırlarını sizin
              için yeniden çiziyoruz! Dijital dünyada markanızı öne çıkaracak
              yaratıcı çözümler sunuyoruz.
            </p>
          </div>

          <div className="w-full lg:flex-1 lg:grow flex justify-center">
            <div className="w-full max-w-4xl">
              {/* Desktop Grid */}
              <div className="hidden lg:grid grid-cols-4 gap-8 items-center justify-items-center">
                {companyLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img
                      className="h-16 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Infinite Carousel */}
              <div className="lg:hidden flex overflow-hidden relative">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: isClient ? `translateX(-${(currentLogoIndex * 100) / (typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 2)}%)` : 'translateX(0%)',
                    width: `${(companyLogos.length * 2 * 100) / (typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 2)}%`
                  }}
                >
                  {/* Duplicate logos for infinite effect */}
                  {[...companyLogos, ...companyLogos].map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center p-4 bg-white/5 rounded-lg mx-2 hover:bg-white/10 transition-colors"
                      style={{ width: isClient ? `${100 / (typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 2)}%` : '50%' }}
                    >
                      <img
                        className="h-16 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                        alt={logo.alt}
                        src={logo.src}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="animate-on-scroll animate-fade-up">
        <ServicesSection />
      </div>

      {/* PROJECTS */}
      <section
        className="w-full lg:max-w-[1400px] min-w-[680px] mb-12 px-4 animate-on-scroll animate-fade-up"
        id="projects"
      >
        <div className="flex items-center gap-1.5 w-full py-4 bg-black-900">
          <img
            className="w-6 h-6"
            alt="Icon"
            src="/figmaAssets/icon.svg"
            data-testid="team-icon"
          />
          <h2
            className="font-semibold text-white text-base lg:text-lg leading-7"
            data-testid="team-heading"
          >
            Projelerimiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black-900 border border-[#282828] overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer animate-on-scroll animate-scale"
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

      <div className="animate-on-scroll animate-fade-up">
        <TeamSection />
      </div>
      <div className="animate-on-scroll animate-fade-up">
        <ContactSection />
      </div>
      <div className="animate-on-scroll animate-fade-up">
        <FooterSection />
      </div>
    </div>
  );
};
