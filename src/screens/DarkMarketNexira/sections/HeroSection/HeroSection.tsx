import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1136px] mx-auto flex flex-col items-start gap-5 py-8">
      <h2 className="font-['Rajdhani',Helvetica] font-medium text-[#ffffffb8] text-[54px] tracking-[-1.08px] leading-[72px]">
        Nexira DAEP is the only gaming marketplace that allows players to use
        their in-game currency and NFTs across different titles for the first
        time ever. How?
      </h2>

      <h1 className="font-['Rajdhani',Helvetica] font-bold text-[64px] tracking-[-1.28px] leading-[72px]">
        <span className="text-[#2d76ff] tracking-[-0.82px]">The answer</span>
        <span className="text-white tracking-[-0.82px]"> is Ruby.</span>
      </h1>
    </section>
  );
};
