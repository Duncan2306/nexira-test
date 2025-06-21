import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const JoinFormSection = (): JSX.Element => {
  const featuresList = [
    { id: "1", title: "Invaluable versatility" },
    { id: "2", title: "Instant cash out" },
    {
      id: "3",
      title: "AI matches buyers + sellers of digital assets across games",
    },
    { id: "4", title: "Smart contracts for secure, automatic transactions" },
    {
      id: "5",
      title: "Developer tools let game creators easily plug into the network",
    },
  ];

  return (
    <section className="w-full max-w-[1137px] mx-auto py-16 relative">
      <Card className="w-full h-[695px] bg-[url(/rectangle-318-1.svg)] bg-[100%_100%] border-0">
        <CardContent className="p-0 h-full relative bg-[url(/union-10.svg)] bg-[100%_100%]">
          <div className="absolute w-[946px] top-[72px] left-[99px] [font-family:'Rajdhani',Helvetica]">
            <span className="font-bold text-white text-4xl tracking-[-0.26px] leading-[50px]">
              Ruby:
            </span>
            <span className="font-medium text-white text-4xl tracking-[-0.26px]">
              {" "}
              A revolutionary shared cryptocurrency that breaks the barriers of
              traditional currency limited to a single game.
            </span>
          </div>

          <div className="absolute w-full max-w-[1035px] top-[229px] left-[101px]">
            {featuresList.map((feature, index) => (
              <div
                key={feature.id}
                className="flex items-start mb-[56px] last:mb-0"
              >
                <img
                  className="w-[35px] h-[35px] mr-[26px] mt-[5px]"
                  alt={`Feature ${feature.id}`}
                  src={`./${feature.id}.png`}
                />
                <div className="[font-family:'Rajdhani',Helvetica] font-medium text-white text-4xl tracking-[-0.72px] leading-[50px]">
                  {feature.title}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
