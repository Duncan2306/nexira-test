import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DaePSection } from "./sections/DaePSection";
import { DescriptionSection } from "./sections/DescriptionSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { JoinFormSection } from "./sections/JoinFormSection";
import { PartnersSection } from "./sections/PartnersSection";
import { SupportSection } from "./sections/SupportSection";

export const DarkMarketNexira = (): JSX.Element => {
  // Market menu items data
  const marketMenuItems = [
    {
      title: "Explore",
      description: "Explore Ruby Marketplace & Legendary Items.",
      iconSrc: "/artboard-78.svg",
      iconBgSrc: "/rectangle-317-3.svg",
      unionSrc: "/union.svg",
    },
    {
      title: "My NFTs",
      description: "Track your NFT items.",
      iconSrc: "/artboard-78-1.svg",
      iconBgSrc: "/rectangle-317-3.svg",
      unionSrc: "/union.svg",
    },
    {
      title: "My Activity",
      description: "Track your trading activities.",
      iconSrc: "/frame-1000004311.svg",
      iconBgSrc: "/group-4955.png",
    },
    {
      title: "Statistics",
      description: "Statistics on the entire Ruby Marketplace.",
      iconSrc: "/artboard-78-2.svg",
      iconBgSrc: "/group-4955-1.png",
    },
  ];

  return (
    <div className="bg-[#090e1c] flex flex-row justify-center w-full">
      <div className="bg-[#090e1c] overflow-hidden w-full max-w-[1440px] relative">
        <div className="w-full relative">
          <div className="w-full h-[474px] rotate-180" />

          <img className="w-full h-[655px]" alt="Banner" src="/banner.png" />

          <Card className="w-[332px] h-[290px] absolute top-[77px] left-[807px] border-0">
            <CardContent className="p-0">
              <div className="relative w-[332px] h-[290px] bg-[url(/bg.png)] bg-[100%_100%]">
                <div className="absolute top-2 left-[39px] font-['Rajdhani',Helvetica] font-bold text-[#d7def9] text-[10px] tracking-[2.35px] leading-[14px] whitespace-nowrap">
                  MARKET
                </div>

                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex flex-col w-[292px] items-start gap-[22px] absolute top-[38px] left-5">
                    {marketMenuItems.map((item, index) => (
                      <div key={index} className="relative w-[292px] h-10">
                        <div className="flex flex-col w-[236px] items-start gap-1 absolute top-px left-14">
                          <div className="relative self-stretch mt-[-1.00px] font-['Rajdhani',Helvetica] font-bold text-white text-sm tracking-[0] leading-5">
                            {item.title}
                          </div>

                          <div className="relative self-stretch font-['Rajdhani',Helvetica] font-semibold text-[#d7def9] text-xs tracking-[-0.12px] leading-[14px]">
                            {item.description}
                          </div>
                        </div>

                        <div className="absolute w-10 h-10 top-0 left-0 bg-[url(${item.iconBgSrc})] bg-[100%_100%]">
                          <div className="relative h-10">
                            <img
                              className="absolute w-[21px] h-5 top-2.5 left-[9px]"
                              alt={`${item.title} icon`}
                              src={item.iconSrc}
                            />
                            {item.unionSrc && (
                              <img
                                className="absolute w-10 h-10 top-0 left-0"
                                alt="Union"
                                src={item.unionSrc}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content sections */}
        <HeaderSection />
        <HeroSection />

        <div className="w-full relative">
          <PartnersSection />
        </div>

        <div className="w-full relative">
          <DaePSection />
          <div className="w-full h-[802px] relative">
            <img
              className="w-full h-[802px]"
              alt="Mask group"
              src="/mask-group-3.png"
            />
          </div>
        </div>

        <div className="w-full relative">
          <DescriptionSection />
          <div className="w-full h-[550px] overflow-hidden opacity-[0.59] relative">
            <img className="w-full h-[550px]" alt="Background" src="/a.png" />
          </div>
          <img
            className="absolute w-[65px] h-[140px] right-[65px] bottom-0"
            alt="Support"
            src="/support.svg"
          />
        </div>

        <SupportSection />
        <JoinFormSection />
      </div>
    </div>
  );
};
