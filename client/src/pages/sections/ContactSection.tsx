import { CalendarIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black-900 py-8 lg:py-14 flex justify-center px-4" id="contact">
      <Card className="w-full max-w-[1060px] rounded-[29.48px] overflow-hidden border-0">
        <CardContent className="p-0">
          <div
            className="flex flex-col items-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[59px] text-center bg-cover bg-center min-h-[300px] lg:min-h-[400px] relative"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url(/figmaAssets/content-1.png)",
            }}
          >
            <div className="flex flex-col items-center gap-4 lg:gap-6 max-w-full lg:max-w-[507px] z-10">
              <h2 className="font-display-03 text-white text-3xl sm:text-4xl md:text-5xl lg:text-[length:var(--display-03-font-size)] tracking-tight lg:tracking-[var(--display-03-letter-spacing)] leading-tight lg:leading-[var(--display-03-line-height)] font-[number:var(--display-03-font-weight)] [font-style:var(--display-03-font-style)]" data-testid="contact-heading">
                Bizimle İletişime Geçin!
              </h2>

              <p className="font-text-22px-regular text-white text-base sm:text-lg lg:text-[length:var(--text-22px-regular-font-size)] tracking-normal lg:tracking-[var(--text-22px-regular-letter-spacing)] leading-relaxed lg:leading-[var(--text-22px-regular-line-height)] font-[number:var(--text-22px-regular-font-weight)] [font-style:var(--text-22px-regular-font-style)] max-w-lg" data-testid="contact-description">
                Dijital dünyada markanızı öne çıkaracak yaratıcı projeler için 
                bizimle iletişime geçin. Ücretsiz danışmanlık hizmeti sunuyoruz.
              </p>
            </div>

            <Button
              variant="default"
              className="bg-white text-black-700 rounded-[28.74px] px-4 sm:px-6 lg:px-[20.64px] py-3 lg:py-[8.84px] text-sm lg:text-[11.8px] tracking-tight lg:tracking-[-0.15px] leading-[20.6px] font-normal font-['Inter',Helvetica] flex items-center gap-2 lg:gap-[5.9px] hover:bg-gray-100 transition-colors z-10"
              data-testid="contact-consultation-button"
            >
              <CalendarIcon className="w-4 h-4 lg:w-[14.74px] lg:h-[14.74px]" />
              <span>Ücretsiz Danışmanlık</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
