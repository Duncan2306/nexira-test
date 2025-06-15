import React from "react";

// Define card data for mapping
const cardData = [
  {
    id: 1,
    title: "GAMERS",
    bgImage: "/rectangle-318-3.svg",
    unionImage: "/union-10.svg",
    maskImage: "/mask-group-2.png",
    buttonImage: "/group-4923-3.png",
    textColor: "text-[#2d76ff]",
  },
  {
    id: 2,
    title: "DEVELOPERS",
    bgImage: "/rectangle-318-1.svg",
    unionImage: "/union-10.svg",
    maskImage: "/mask-group-1.png",
    buttonImage: "/group-4923-2.png",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "INVESTORS",
    bgImage: "/rectangle-318-3.svg",
    unionImage: "/union-10.svg",
    maskImage: "/mask-group.png",
    buttonImage: "/group-4923-1.png",
    textColor: "text-[#2d76ff]",
  },
];

export const DaePSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-14">
      <div className="flex flex-col items-center gap-12 mb-12">
        <div className="w-full max-w-[832px] text-center">
          <h2 className="[font-family:'Rajdhani',Helvetica] font-bold text-[64px] tracking-[-1.28px] leading-[72px]">
            <span className="text-[#2d76ff] tracking-[-0.82px]">How To</span>
            <span className="text-white tracking-[-0.82px]"> Join</span>
          </h2>
          <p className="mt-5 [font-family:'Rajdhani',Helvetica] font-medium text-[#d7def9] text-2xl tracking-[-0.48px] leading-9">
            Early adopters can participate in the presale and secure $NEX at a
            discounted rate.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="relative w-[385px] h-[403px]"
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="relative h-[552px] top-[-149px]">
              <img
                className="w-[385px] h-[403px] absolute left-0"
                style={{
                  top: index === 1 ? "146px" : index === 2 ? "150px" : "149px",
                }}
                alt="Union"
                src={card.unionImage}
              />

              <div
                className="absolute w-[336px] h-[473px] top-0 left-6"
                style={{
                  backgroundImage: `url(${card.maskImage})`,
                  backgroundSize: "100% 100%",
                  left: index === 1 ? "26px" : "24px",
                }}
              />

              <div
                className="absolute w-[335px] h-[54px]"
                style={{
                  top: index === 1 ? "473px" : index === 2 ? "473px" : "472px",
                  left: index === 1 ? "26px" : "25px",
                }}
              >
                <div
                  className="relative w-[333px] h-[54px]"
                  style={{
                    backgroundImage: `url(${card.buttonImage})`,
                    backgroundSize: "100% 100%",
                    width: index === 1 ? "336px" : "333px",
                  }}
                >
                  <div
                    className={`absolute top-[9px] font-button-nexira-DAEP font-[number:var(--button-nexira-DAEP-font-weight)] ${card.textColor} text-[length:var(--button-nexira-DAEP-font-size)] text-center tracking-[var(--button-nexira-DAEP-letter-spacing)] leading-[var(--button-nexira-DAEP-line-height)] whitespace-nowrap [font-style:var(--button-nexira-DAEP-font-style)]`}
                    style={{
                      left:
                        index === 0 ? "132px" : index === 1 ? "103px" : "114px",
                    }}
                  >
                    {card.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
