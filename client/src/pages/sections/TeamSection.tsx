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
    <section className="flex flex-col items-center gap-6 py-8 lg:py-14 bg-black-900 px-4" id="team">
      <div className="flex flex-col items-center gap-6 lg:gap-8 w-full max-w-[943px]">
        <header className="flex items-center w-full py-4 bg-black-900">
          <div className="flex items-center gap-1.5">
            <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon.svg" data-testid="team-icon" />
            <h2 className="font-semibold text-white text-base lg:text-lg leading-7" data-testid="team-heading">
              Our Team
            </h2>
          </div>
        </header>

        <div className="flex flex-col items-center w-full gap-6 lg:gap-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full gap-6 lg:gap-8">
            <h3 className="w-full lg:max-w-[403px] font-normal text-white text-xl sm:text-2xl lg:text-[31px] tracking-tight lg:tracking-[-1.47px] leading-tight lg:leading-[34px] text-center lg:text-left">
              We are passionate about creating visually stunning and functional
              solutions that communicate effectively.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 lg:flex-1 lg:justify-end">
              {teamMembers.slice(0, 2).map((member, index) => (
                <Card
                  key={`top-member-${index}`}
                  className="w-full sm:w-[218px] bg-black-900 rounded-[18px] overflow-hidden border-[1.5px] border-solid border-[#282828] hover:border-white/20 transition-colors"
                  data-testid={`team-member-${index}`}
                >
                  <div
                    className="w-full h-[208px] bg-cover bg-center"
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
                  className="w-full h-[208px] bg-cover bg-center"
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
        className="flex items-center gap-1.5 px-5 py-2.5 rounded-[29px] border-[1.5px] border-solid border-[#282828] bg-transparent hover:bg-white/5 transition-colors"
        data-testid="see-all-members-button"
      >
        <span className="text-blue-black300 text-sm lg:text-[15px] leading-[25px] font-normal">
          See all members
        </span>
        <ArrowUpRightIcon className="w-5 h-5" />
      </Button>
    </section>
  );
};
