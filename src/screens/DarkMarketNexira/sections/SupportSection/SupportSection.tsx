import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Define data for footer links to make the code more maintainable
const companyLinks = [
  { title: "About", url: "#" },
  { title: "Press", url: "#" },
  { title: "Terms of Use", url: "#" },
  { title: "Privacy Policy", url: "#" },
];

const supportLinks = [
  { title: "Contact Us", url: "#" },
  { title: "Frequently Asked Questions", url: "#", highlighted: true },
  { title: "Criteria Checklist", url: "#" },
  { title: "Existing Game Application", url: "#" },
  { title: "Create Game Application", url: "#" },
];

const socialIcons = [
  { src: "/twitter-alt-circle-1-3.svg", alt: "Twitter alt circle" },
  { src: "/twitter-alt-circle-1-1.svg", alt: "Twitter alt circle" },
  { src: "/twitter-alt-circle-1.svg", alt: "Twitter alt circle" },
  { src: "/twitter-alt-circle-1-2.svg", alt: "Twitter alt circle" },
];

export const SupportSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[url(/rectangle-318.svg)] bg-[100%_100%] py-20">
      <div className="container mx-auto px-20 max-w-[1440px]">
        {/* Main footer content */}
        <div className="flex flex-wrap gap-x-24 gap-y-10">
          {/* Company links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Rajdhani',Helvetica] font-semibold text-[#ffffff59] text-base leading-7">
              Company
            </h3>
            <div className="flex flex-col gap-2">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="font-['Rajdhani',Helvetica] font-semibold text-foregroundnight900-high-emphasis text-base leading-7"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Support links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Rajdhani',Helvetica] font-semibold text-[#ffffff59] text-base leading-7">
              Support
            </h3>
            <div className="flex flex-col gap-2">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`font-['Rajdhani',Helvetica] font-semibold text-base leading-7 ${
                    link.highlighted
                      ? "text-white"
                      : "text-foregroundnight900-high-emphasis"
                  }`}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* App download section */}
          <div className="flex flex-col gap-4 ml-16">
            <h3 className="font-['Rajdhani',Helvetica] font-semibold text-[#ffffff59] text-base leading-7">
              Download The App
            </h3>
            <div className="flex flex-col gap-3.5">
              <img
                className="w-[184px] h-[54px]"
                alt="App Store"
                src="/image-455.png"
              />
              <img
                className="w-[183px] h-[54px]"
                alt="Google Play"
                src="/image-456.png"
              />
            </div>
          </div>

          {/* Newsletter and social media */}
          <div className="flex flex-col gap-4 ml-auto">
            <h3 className="font-['Rajdhani',Helvetica] font-semibold text-[#ffffff59] text-base leading-7">
              Newsletter
            </h3>

            {/* Email subscription */}
            <div className="flex gap-3 mt-2">
              <div className="relative w-[331px] h-[54px]">
                <img
                  className="absolute w-[330px] h-[54px] top-0 left-0"
                  alt="Rectangle"
                  src="/rectangle-318-2.svg"
                />
                <img
                  className="w-[331px] h-[54px] top-0 absolute left-0"
                  alt="Union"
                  src="/union-3.svg"
                />
                <Input
                  className="absolute inset-0 bg-transparent border-0 font-['Rajdhani',Helvetica] font-medium text-lg tracking-[-0.36px] text-[#d7def9] pl-6 h-[54px]"
                  placeholder="Enter your email..."
                />
              </div>

              <Button className="w-[166px] h-[54px] bg-[url(/group-4923.png)] bg-[100%_100%] border-0 font-button-nexira-DAEP text-white">
                SUBMIT
              </Button>
            </div>

            {/* Social media icons */}
            <div className="flex gap-6 mt-6">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-[54px] h-[54px] bg-[url(/rectangle-317.svg)] bg-[100%_100%]"
                >
                  <div className="relative h-[54px] bg-[url(/union.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[34px] h-[34px] top-2.5 left-2.5"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <Separator className="mt-20 border-[#1b254c]" />

        <div className="flex justify-between items-center py-5">
          <div className="font-footer-nexira-DAEP text-[#ffffff7a]">
            © 2025 Nexira DAEP. All rights reserved.
          </div>

          {/* Language selector */}
          <div className="w-[81px] h-7 relative bg-[url(/rectangle-317-1.svg)] bg-[100%_100%]">
            <img
              className="w-[81px] h-7 absolute top-0 left-0"
              alt="Union"
              src="/union-2.svg"
            />
            <img
              className="absolute w-2 h-1.5 top-[11px] left-16"
              alt="Frame"
              src="/frame-93.svg"
            />
            <div className="absolute top-[5px] left-[33px] font-['Rajdhani',Helvetica] font-semibold text-white text-sm tracking-[-0.28px]">
              EN
            </div>
            <img
              className="absolute w-4 h-3 top-2 left-[9px]"
              alt="Flag set"
              src="/flag-set.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
