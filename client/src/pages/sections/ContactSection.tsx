import { CalendarIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black-900 py-14 flex justify-center">
      <Card className="w-full max-w-[1060px] rounded-[29.48px] overflow-hidden border-0">
        <CardContent className="p-0">
          <div
            className="flex flex-col items-center gap-6 px-8 py-[59px] text-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(../figmaAssets/content-1.png)",
            }}
          >
            <div className="flex flex-col items-center gap-3 max-w-[507px]">
              <h2 className="font-display-03 text-white text-[length:var(--display-03-font-size)] tracking-[var(--display-03-letter-spacing)] leading-[var(--display-03-line-height)] font-[number:var(--display-03-font-weight)] [font-style:var(--display-03-font-style)]">
                Have an idea? Let&apos;s talk.
              </h2>

              <p className="font-text-22px-regular text-white text-[length:var(--text-22px-regular-font-size)] tracking-[var(--text-22px-regular-letter-spacing)] leading-[var(--text-22px-regular-line-height)] font-[number:var(--text-22px-regular-font-weight)] [font-style:var(--text-22px-regular-font-style)]">
                Visually attractive design from concept to final result. We
                create solutions that are bold and forward-looking.
              </p>
            </div>

            <Button
              variant="default"
              className="bg-white text-black-700 rounded-[28.74px] px-[20.64px] py-[8.84px] text-[11.8px] tracking-[-0.15px] leading-[20.6px] font-normal font-['Inter',Helvetica] flex items-center gap-[5.9px]"
            >
              <CalendarIcon className="w-[14.74px] h-[14.74px]" />
              <span>Free Consultation</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
