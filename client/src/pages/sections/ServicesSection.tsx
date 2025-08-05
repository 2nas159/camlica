import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = (): JSX.Element => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Google ADS",
      image: "/figmaAssets/texture-1.jpg",
      color: "bg-gradient-to-r from-blue-500 to-purple-600",
      description:
        "Google ADS Uzmanlarımız Tarafından Yönetilen Reklamlarınız Sizleri Potansiyel Müşterilerinize Ulaştırmayı Hedefler.",
    },
    {
      id: 2,
      title: "Video ve Animasyon",
      image: "/figmaAssets/texture-2.jpg",
      color: "bg-gradient-to-r from-green-400 to-emerald-500",
      description:
        "Video Editörlerimiz Tarafından Sizin İstekleriniz Doğrultusunda Oluşturulan Animasyonlar veya Videolarınız Sizleri Görsel Olarak En İyi Şekilde Temsil Eder.",
    },
    {
      id: 3,
      title: "Web Tasarım",
      image: "/figmaAssets/texture-3.jpg",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      description:
        "Web Yazılımcılarımız Tarafından Sizin İstekleriniz Ve İhtiyaçlarınız Doğrultusunda Hazırlanan Web Sitelerimiz Sizleri Ve Firmanızı En İyi Şekilde Temsil Eder.",
    },
    {
      id: 4,
      title: "Grafik Tasarım",
      image: "/figmaAssets/texture-4.jpg",
      color: "bg-gradient-to-r from-red-500 to-orange-500",
      description:
        "Grafikler ve tasarımlar, markanızın görsel kimliğini şekillendirmenin en güçlü yoludur. Biz, her projede sıradışı bir bakış açısıyla yaklaşırız, çünkü her bir detayın önemini anlarız. Her renk, her çizgi ve her öğe, markanızı benzersiz kılmak için bir fırsattır. Size özel tasarımlar ve grafikler oluşturarak, markanızın etkisini en üst düzeye çıkarırız.",
    },
    {
      id: 5,
      title: "SEO",
      image: "/figmaAssets/texture-5.jpg",
      color: "bg-gradient-to-r from-indigo-400 to-cyan-400",
      description:
        "SEO Uzmanlarımız Tarafından Ve Tamamı İle Size Özel Olarak Oluşturulan SEO Stratejileri İle Web Sayfalarınızı Organik Sıralamalarda Yükseltmeyi Hedeflemekteyiz.",
    },
    {
      id: 6,
      title: "Sosyal Medya Yönetimi",
      image: "/figmaAssets/texture-6.jpg",
      color: "bg-gradient-to-r from-indigo-400 to-cyan-400",
      description:
        "Sosyal Medya Uzmanlarımız ve Grafik Tasarımcılarımız Tarafından Sizlere Özel Olarak Hazırlanan Çalışmalarımızla Firmanızı Sosyal Medyada En İyi Şekilde Temsil Etmeyi Hedefleriz.",
    },
  ];

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section
      className="flex flex-col items-center gap-6 py-8 lg:py-14 bg-black-900 w-full min-w-[320px]"
      id="services"
    >
      <div className="flex flex-col items-center gap-6 lg:gap-8 w-full max-w-[1400px] min-w-[320px] px-4">
        <header className="flex items-center w-full py-4 bg-black-900">
          <div className="flex items-center gap-1.5">
            <img
              className="w-6 h-6"
              alt="Services Icon"
              src="/figmaAssets/icon.svg"
              data-testid="services-icon"
            />
            <h2
              className="font-semibold text-white text-base lg:text-lg leading-7"
              data-testid="services-heading"
            >
              Our Services
            </h2>
          </div>
        </header>

        <div className="flex flex-col w-full gap-0">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="w-full bg-black-900 transition-all cursor-pointer overflow-hidden border-none"
              style={{ borderBottom: "1px solid #282828" }}
              onClick={() => toggleService(service.id)}
              data-testid={`service-item-${index}`}
            >
              <CardContent className="py-0">
                <div className="flex items-center justify-between p-4 lg:p-6">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-24 h-5 lg:w-20 lg:h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-24 h-full object-cover"
                      />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-white text-lg lg:text-xl font-medium">
                      {service.title}
                    </h3>
                  </div>

                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-white hover:bg-white/10 transition-transform duration-100 ${
                      expandedService === service.id ? "rotate-45" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleService(service.id);
                    }}
                    data-testid={`service-expand-${index}`}
                  >
                    <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
                  </Button>
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all ease-in-out overflow-hidden ${
                    expandedService === service.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                    <div className="pt-3 lg:pt-4">
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
