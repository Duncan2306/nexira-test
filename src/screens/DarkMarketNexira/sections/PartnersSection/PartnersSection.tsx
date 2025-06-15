import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PartnersSection = (): JSX.Element => {
  // Partner data for mapping
  const partners = [
    {
      id: 1,
      logo: "/property-1-main-version-1.png",
      bgPosition: "50% 50%",
      width: "138px",
      height: "68px",
      top: "45px",
      left: "51px",
    },
    {
      id: 2,
      logo1: "/group-1000004249.png",
      logo1Width: "125px",
      logo1Height: "10px",
      logo1Top: "10px",
      logo1Left: "0",
      logo2: "/group-6526.png",
      logo2Width: "35px",
      logo2Height: "31px",
      logo2Top: "0",
      logo2Left: "45px",
      containerWidth: "125px",
      containerHeight: "20px",
      containerTop: "38px",
      containerLeft: "57px",
    },
    {
      id: 3,
      logo: "/logo-nft-brawler-1.png",
      bgPosition: "50% 50%",
      width: "141px",
      height: "99px",
      top: "30px",
      left: "49px",
    },
    {
      id: 4,
      logo: "/game-logo-1.png",
      bgPosition: "50% 50%",
      width: "152px",
      height: "93px",
      top: "32px",
      left: "44px",
    },
    {
      id: 5,
      logo: "/logo.svg",
      width: "127px",
      height: "62px",
      top: "50px",
      left: "56px",
    },
    {
      id: 6,
      logo1: "/vector-7.svg",
      logo1Width: "129px",
      logo1Height: "25px",
      logo1Top: "13px",
      logo1Left: "55px",
      logo2: "/group-58.png",
      logo2Width: "34px",
      logo2Height: "24px",
      logo2Top: "12px",
      logo2Left: "4px",
      containerWidth: "184px",
      containerHeight: "46px",
      containerTop: "54px",
      containerLeft: "26px",
      hasCircle: true,
    },
  ];

  return (
    <section className="w-full py-16 relative">
      {/* Background effects */}
      <div className="relative w-full h-[667px]">
        <div className="w-full h-[474px] rotate-180" />

        <div className="w-full h-[156px] top-[3px] left-0 rotate-180">
          <div className="relative h-[156px] opacity-20">
            <img className="w-full h-[157px]" alt="Group" src="/group.png" />
          </div>
        </div>

        {/* Blue glow effect */}
        <div className="absolute w-[958px] h-[120px] top-0 left-1/2 -translate-x-1/2 overflow-hidden">
          <div className="relative h-[230px] top-[-110px] rounded-[479.18px/114.99px] -rotate-180 blur-[6.9px] [background:radial-gradient(50%_50%_at_50%_62%,rgba(140,189,254,1)_18%,rgba(32,158,255,1)_47%,rgba(72,137,198,0.19)_81%,rgba(32,158,255,0)_100%)] opacity-90" />
        </div>

        {/* Section title and subtitle */}
        <div className="absolute w-full max-w-[832px] text-center top-[127px] left-1/2 -translate-x-1/2">
          <h2 className="font-['Rajdhani',Helvetica] font-bold text-[64px] tracking-[-1.28px] leading-[72px]">
            <span className="text-[#2d76ff] tracking-[-0.82px]">Our</span>
            <span className="text-white tracking-[-0.82px]"> Partners</span>
          </h2>

          <p className="mt-5 font-['Rajdhani',Helvetica] font-medium text-[#d7def9] text-2xl tracking-[-0.48px] leading-9">
            Early adopters can participate in the presale and secure $NEX at a
            discounted rate.
          </p>
        </div>

        {/* Partners grid */}
        <div className="flex flex-col items-center gap-5 absolute top-[327px] left-1/2 -translate-x-1/2 w-full max-w-[760px]">
          {/* First row */}
          <div className="flex justify-between w-full">
            {partners.slice(0, 3).map((partner) => (
              <Card
                key={partner.id}
                className="w-60 h-[162px] bg-transparent border-0"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="absolute w-[239px] h-[162px] top-0 left-0"
                    alt="Rectangle"
                    src="/rectangle-318-1.svg"
                  />
                  <img
                    className="w-60 h-[162px] top-0 absolute left-0"
                    alt="Union"
                    src="/union-7.svg"
                  />
                  {partner.logo && (
                    <div
                      className="absolute"
                      style={{
                        width: partner.width,
                        height: partner.height,
                        top: partner.top,
                        left: partner.left,
                        backgroundImage: `url(${partner.logo})`,
                        backgroundSize: "cover",
                        backgroundPosition: partner.bgPosition || "center",
                      }}
                    />
                  )}
                  {partner.logo1 && (
                    <div
                      className="relative"
                      style={{
                        width: partner.containerWidth,
                        height: partner.containerHeight,
                        top: partner.containerTop,
                        left: partner.containerLeft,
                      }}
                    >
                      <img
                        className="absolute"
                        style={{
                          width: partner.logo1Width,
                          height: partner.logo1Height,
                          top: partner.logo1Top,
                          left: partner.logo1Left,
                        }}
                        alt="Logo"
                        src={partner.logo1}
                      />
                      {partner.logo2 && (
                        <img
                          className="absolute"
                          style={{
                            width: partner.logo2Width,
                            height: partner.logo2Height,
                            top: partner.logo2Top,
                            left: partner.logo2Left,
                          }}
                          alt="Logo"
                          src={partner.logo2}
                        />
                      )}
                      {partner.hasCircle && (
                        <div className="absolute w-[46px] h-[46px] top-0 left-0 bg-white rounded-[22.84px]">
                          <img
                            className="absolute w-[34px] h-6 top-3 left-1"
                            alt="Group"
                            src="/group-58.png"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-between w-full">
            {partners.slice(3, 6).map((partner) => (
              <Card
                key={partner.id}
                className="w-60 h-[162px] bg-transparent border-0"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="absolute w-[239px] h-[162px] top-0 left-0"
                    alt="Rectangle"
                    src="/rectangle-318-1.svg"
                  />
                  <img
                    className="w-60 h-[162px] top-0 absolute left-0"
                    alt="Union"
                    src="/union-7.svg"
                  />
                  {partner.logo && (
                    <div
                      className="absolute"
                      style={{
                        width: partner.width,
                        height: partner.height,
                        top: partner.top,
                        left: partner.left,
                        backgroundImage: partner.logo.endsWith(".svg")
                          ? "none"
                          : `url(${partner.logo})`,
                        backgroundSize: "cover",
                        backgroundPosition: partner.bgPosition || "center",
                      }}
                    >
                      {partner.logo.endsWith(".svg") && (
                        <img
                          className="w-full h-full"
                          alt="Logo"
                          src={partner.logo}
                        />
                      )}
                    </div>
                  )}
                  {partner.logo1 && (
                    <div
                      className="relative"
                      style={{
                        width: partner.containerWidth,
                        height: partner.containerHeight,
                        top: partner.containerTop,
                        left: partner.containerLeft,
                      }}
                    >
                      <img
                        className="absolute"
                        style={{
                          width: partner.logo1Width,
                          height: partner.logo1Height,
                          top: partner.logo1Top,
                          left: partner.logo1Left,
                        }}
                        alt="Logo"
                        src={partner.logo1}
                      />
                      {partner.logo2 && (
                        <img
                          className="absolute"
                          style={{
                            width: partner.logo2Width,
                            height: partner.logo2Height,
                            top: partner.logo2Top,
                            left: partner.logo2Left,
                          }}
                          alt="Logo"
                          src={partner.logo2}
                        />
                      )}
                      {partner.hasCircle && (
                        <div className="absolute w-[46px] h-[46px] top-0 left-0 bg-white rounded-[22.84px]">
                          <img
                            className="absolute w-[34px] h-6 top-3 left-1"
                            alt="Group"
                            src="/group-58.png"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
