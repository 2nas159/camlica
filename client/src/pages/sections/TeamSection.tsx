import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team member data for mapping
  const teamMembers = [
    {
      name: "Jocelyn Schleifer",
      position: "Managing Director",
      image: "/figmaAssets/paste-image.png",
    },
    {
      name: "Jocelyn Schleifer",
      position: "Managing Director",
      image: "/figmaAssets/paste-image-1.png",
    },
    {
      name: "Jocelyn Schleifer",
      position: "Managing Director",
      image: "/figmaAssets/paste-image-2.png",
    },
    {
      name: "Jocelyn Schleifer",
      position: "Managing Director",
      image: "/figmaAssets/paste-image-3.png",
    },
    {
      name: "Jocelyn Schleifer",
      position: "Managing Director",
      image: "/figmaAssets/paste-image-4.png",
    },
    {
      name: "Jocelyn Schleifer",
      position: "Managing Director",
      image: "/figmaAssets/paste-image-5.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6 py-14 bg-black-900">
      <div className="flex flex-col items-center gap-8 w-full max-w-[943px]">
        <header className="flex items-center w-full py-4 bg-black-900">
          <div className="flex items-center gap-1.5">
            <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon.svg" />
            <h2 className="font-semibold text-white text-base leading-7">
              Our Team
            </h2>
          </div>
        </header>

        <div className="flex flex-col items-center w-full gap-6">
          <div className="flex justify-between items-start w-full">
            <h3 className="w-full max-w-[403px] font-normal text-white text-[31px] tracking-[-1.47px] leading-[34px]">
              We are passionate about creating visually stunning and functional
              solutions that communicate effectively.
            </h3>

            <div className="flex gap-6 flex-1 justify-end">
              {teamMembers.slice(0, 2).map((member, index) => (
                <Card
                  key={`top-member-${index}`}
                  className="w-[218px] bg-black-900 rounded-[18px] overflow-hidden border-[1.5px] border-solid border-[#282828]"
                >
                  <div
                    className="w-full h-[208px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <CardContent className="p-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-col gap-[3px]">
                        <h4 className="font-semibold text-white text-[13px] leading-[22px]">
                          {member.name}
                        </h4>
                        <p className="font-semibold text-black-400 text-[12px] leading-[19px]">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex gap-[23px] w-full">
            {teamMembers.slice(2).map((member, index) => (
              <Card
                key={`bottom-member-${index}`}
                className="w-[218px] bg-black-900 rounded-[18px] overflow-hidden border-[1.5px] border-solid border-[#282828]"
              >
                <div
                  className="w-full h-[208px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <CardContent className="p-3">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col gap-[3px]">
                      <h4 className="font-semibold text-white text-[13px] leading-[22px]">
                        {member.name}
                      </h4>
                      <p className="font-semibold text-black-400 text-[12px] leading-[19px]">
                        {member.position}
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
        className="flex items-center gap-1.5 px-5 py-2.5 rounded-[29px] border-[1.5px] border-solid border-[#282828] bg-transparent"
      >
        <span className="text-blue-black300 text-[15px] leading-[25px] font-normal">
          See all members
        </span>
        <ArrowUpRightIcon className="w-5 h-5" />
      </Button>
    </section>
  );
};
