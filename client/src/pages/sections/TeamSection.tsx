import { ArrowUpRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

export const TeamSection = (): JSX.Element => {
  // Team member data for CMLC agency
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Creative Director",
      image: "/figmaAssets/paste-image.png",
      specialty: "Brand Strategy"
    },
    {
      name: "Elif Demir",
      position: "Digital Marketing Manager",
      image: "/figmaAssets/paste-image-1.png",
      specialty: "Google Ads & SEO"
    },
    {
      name: "Mehmet Can",
      position: "Graphic Designer",
      image: "/figmaAssets/paste-image-2.png",
      specialty: "Visual Design"
    },
    {
      name: "Zehra Kaya",
      position: "Social Media Specialist",
      image: "/figmaAssets/paste-image-3.png",
      specialty: "Content Creation"
    },
    {
      name: "Burak Öz",
      position: "Web Developer",
      image: "/figmaAssets/paste-image-4.png",
      specialty: "Frontend Development"
    },
    {
      name: "Seda Arslan",
      position: "Video Producer",
      image: "/figmaAssets/paste-image-5.png",
      specialty: "Video & Animation"
    },
  ];

  // Stats data based on CMLC content
  const stats = [
    {
      number: 62,
      suffix: "+",
      label: "Aktif Sosyal Medya Hesabı",
      description: "Yönettiğimiz hesap sayısı"
    },
    {
      number: 98,
      suffix: "%",
      label: "Müşteri Memnuniyet Oranı",
      description: "Tekrar bizimle çalışan müşteriler"
    },
    {
      number: 8,
      suffix: "+",
      label: "Aldığımız Ödül Sayısı",
      description: "Sektörde tanınan başarılarımız"
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const duration = 2000; // Animation duration in milliseconds
        const steps = 60; // Number of steps in the animation
        const increment = stat.number / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [inView]);

  return (
    <section className="flex flex-col items-center gap-6 py-8 lg:py-14 bg-black-900 w-full min-w-[320px]" id="team">
      <div className="flex flex-col items-center gap-6 lg:gap-8 w-full max-w-[1400px] min-w-[320px] px-4">
          {/* Stats Section */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black-900 border border-[#282828] hover:border-white/20 transition-colors text-center">
                <CardContent className="p-6 lg:p-8">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {counts[index]}{stat.suffix}
                  </div>
                  <h4 className="text-black-100 font-semibold text-sm lg:text-base mb-2">{stat.label}</h4>
                  <p className="text-black-400 text-xs lg:text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        <header className="flex items-center w-full py-4 bg-black-900">
          <div className="flex items-center gap-1.5">
            <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon.svg" data-testid="team-icon" />
            <h2 className="font-semibold text-white text-base lg:text-lg leading-7" data-testid="team-heading">
              Ekibimiz
            </h2>
          </div>
        </header>

        <div className="flex flex-col items-center w-full gap-6 lg:gap-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full gap-6 lg:gap-8">
            <h3 className="w-full lg:max-w-[403px] font-normal text-white text-xl sm:text-2xl lg:text-[31px] tracking-tight lg:tracking-[-1.47px] leading-tight lg:leading-[34px] text-center lg:text-left">
              Dijital dünyada fark yaratan, yaratıcı ve deneyimli ekibimizle 
              markanızı zirveye taşıyoruz.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 lg:flex-1 lg:justify-end">
              {teamMembers.slice(0, 2).map((member, index) => (
                <Card
                  key={`top-member-${index}`}
                  className="w-full sm:w-[218px] bg-black-900 rounded-[18px] overflow-hidden border-[1.5px] border-solid border-[#282828] hover:border-white/20 transition-colors"
                  data-testid={`team-member-${index}`}
                >
                  <div
                    className="w-full h-[208px] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <CardContent className="p-3 lg:p-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-col gap-[3px]">
                        <h4 className="font-semibold text-white text-sm lg:text-[13px] leading-[22px]">
                          {member.name}
                        </h4>
                        <p className="font-semibold text-black-400 text-xs lg:text-[12px] leading-[19px]">
                          {member.position}
                        </p>
                        <p className="font-normal text-black-500 text-xs">
                          {member.specialty}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[23px] w-full">
            {teamMembers.slice(2).map((member, index) => (
              <Card
                key={`bottom-member-${index}`}
                className="w-full bg-black-900 rounded-[18px] overflow-hidden border-[1.5px] border-solid border-[#282828] hover:border-white/20 transition-colors"
                data-testid={`team-member-${index + 2}`}
              >
                <div
                  className="w-full h-[208px] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <CardContent className="p-3 lg:p-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col gap-[3px]">
                      <h4 className="font-semibold text-white text-sm lg:text-[13px] leading-[22px]">
                        {member.name}
                      </h4>
                      <p className="font-semibold text-black-400 text-xs lg:text-[12px] leading-[19px]">
                        {member.position}
                      </p>
                      <p className="font-normal text-black-500 text-xs">
                        {member.specialty}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="flex w-full items-center gap-1.5 px-5 py-5 rounded-[29px] border-[1.5px] border-solid border-[#282828] bg-transparent hover:bg-white/5 transition-colors"
        data-testid="see-all-members-button"
      >
        <span className="text-blue-black300 text-sm lg:text-[12px] leading-[19px] font-normal">
          Tüm Ekibi Gör
        </span>
        <ArrowUpRightIcon className="w-5 h-5 text-white" />
      </Button>
    </section>
  );
};
