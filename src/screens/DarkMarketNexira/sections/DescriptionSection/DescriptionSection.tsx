import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const DescriptionSection = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "Enter your First Name",
      required: true,
      type: "input",
      halfWidth: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      placeholder: "Enter your Last Name",
      required: true,
      type: "input",
      halfWidth: true,
    },
    {
      id: "email",
      label: "Your Email Address",
      placeholder: "example@gmail.com",
      required: true,
      type: "input",
      halfWidth: false,
    },
    {
      id: "subject",
      label: "Subject",
      placeholder: "Enter your Subject",
      required: true,
      type: "input",
      halfWidth: false,
    },
    {
      id: "message",
      label: "Message",
      placeholder: "How can we help you?",
      required: true,
      type: "textarea",
      halfWidth: false,
    },
  ];

  // Support options data
  const supportOptions = [
    {
      icon: "./faqs.png",
      title: (
        <>
          <span className="text-white tracking-[-0.12px]">
            Check our frequently asked questions{" "}
          </span>
          <span className="text-[#4eecff] tracking-[-0.12px] underline">
            here
          </span>
          <span className="text-white tracking-[-0.12px]">.</span>
        </>
      ),
      bgImage: "./rectangle-14.svg",
    },
    {
      icon: "./chat.png",
      title: (
        <>
          <span className="text-[#4eecff] tracking-[-0.12px]">Live chat</span>
          <span className="text-white tracking-[-0.12px]">
            {" "}
            with a specialist available 24/7
          </span>
        </>
      ),
      bgImage: "./rectangle-14.svg",
    },
    {
      icon: "./image-405.png",
      title: (
        <>
          <span className="text-white tracking-[-0.08px]">Ask our </span>
          <span className="text-[#4eecff] tracking-[-0.08px]">
            community forum{" "}
          </span>
          <span className="text-white tracking-[-0.08px]">
            and receive answers from players, developers, investors, or the
            Nexira team
          </span>
        </>
      ),
      bgImage: "./rectangle-15.svg",
      isLarge: true,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1206px] mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-title-nexira-DAEP font-[number:var(--title-nexira-DAEP-font-weight)] text-[length:var(--title-nexira-DAEP-font-size)] tracking-[var(--title-nexira-DAEP-letter-spacing)] leading-[var(--title-nexira-DAEP-line-height)] [font-style:var(--title-nexira-DAEP-font-style)]">
          <span className="text-[#2d76ff]">Contact</span>
          <span className="text-white"> Us</span>
        </h1>

        <p className="font-DES-nexira-DAEP font-[number:var(--DES-nexira-DAEP-font-weight)] text-[#d7def9] text-[length:var(--DES-nexira-DAEP-font-size)] tracking-[var(--DES-nexira-DAEP-letter-spacing)] leading-[var(--DES-nexira-DAEP-line-height)] [font-style:var(--DES-nexira-DAEP-font-style)] max-w-[673px] mx-auto mt-6">
          We redact sensitive personal information. Please check your contact
          email inbox in case a request or details of a request are not
          displayed.
        </p>

        <div className="font-DES-nexira-DAEP font-[number:var(--DES-nexira-DAEP-font-weight)] text-[length:var(--DES-nexira-DAEP-font-size)] tracking-[var(--DES-nexira-DAEP-letter-spacing)] leading-[var(--DES-nexira-DAEP-line-height)] [font-style:var(--DES-nexira-DAEP-font-style)] max-w-[673px] mx-auto mt-6">
          <span className="text-[#d7def9]">Email us at </span>
          <span className="text-[#2d76ff]">help@nexira.ai</span>
          <span className="text-[#d7def9]">
            {" "}
            or fill out the contact form below:
          </span>
        </div>

        <p className="font-DES-nexira-DAEP font-[number:var(--DES-nexira-DAEP-font-weight)] text-[#d7def9] text-[length:var(--DES-nexira-DAEP-font-size)] text-center tracking-[var(--DES-nexira-DAEP-letter-spacing)] leading-[var(--DES-nexira-DAEP-line-height)] [font-style:var(--DES-nexira-DAEP-font-style)] mt-4">
          1-3 business day average response rate
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Contact Form */}
        <div className="flex-1">
          <form className="space-y-8">
            {/* First row - First Name and Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              {formFields.slice(0, 2).map((field) => (
                <div key={field.id} className="flex-1 space-y-2">
                  <label className="[font-family:'Rajdhani',Helvetica] font-bold text-white text-lg">
                    {field.label}
                    <span className="text-[#ea3640]">*</span>
                  </label>
                  <div className="h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%] relative">
                    <Input
                      className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#d7def9] text-base pl-6"
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Email and Subject fields */}
            {formFields.slice(2, 4).map((field) => (
              <div key={field.id} className="space-y-2">
                <label className="[font-family:'Rajdhani',Helvetica] font-bold text-white text-lg">
                  {field.label}
                  <span className="text-[#ea3640]">*</span>
                </label>
                <div className="h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%] relative">
                  <Input
                    className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#d7def9] text-base pl-6"
                    placeholder={field.placeholder}
                  />
                </div>
              </div>
            ))}

            {/* Message field */}
            <div className="space-y-2">
              <label className="[font-family:'Rajdhani',Helvetica] font-bold text-white text-lg">
                Message<span className="text-[#ea3640]">*</span>
              </label>
              <div className="h-[145px] bg-[url(/bg-form-2.svg)] bg-[100%_100%] relative">
                <Textarea
                  className="h-[145px] bg-transparent border-none resize-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#d7def9] text-base pl-6 pt-4"
                  placeholder="How can we help you?"
                />
                <img
                  className="absolute w-3.5 h-3.5 bottom-4 right-4"
                  alt="Vector"
                  src="/vector-5.svg"
                />
              </div>
            </div>

            {/* Captcha */}
            <div className="flex justify-center">
              <div className="w-[365px] h-[78px] bg-[url(/rectangle-15-1.svg)] bg-[100%_100%] relative">
                <div className="absolute top-[30px] left-[249px] [font-family:'Rajdhani',Helvetica] font-semibold text-white text-sm tracking-[-0.28px]">
                  I am human
                </div>
                <div className="absolute top-[29px] left-[219px]">
                  <Checkbox
                    id="captcha"
                    className="w-[19px] h-[19px] bg-transparent"
                  />
                </div>
                <img
                  className="absolute w-8 h-8 top-[11px] left-14 object-cover"
                  alt="hCaptcha logo"
                  src="/image-79.png"
                />
                <div className="absolute top-[47px] left-[47px] [font-family:'Rajdhani',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[10px]">
                  <span className="font-semibold leading-[0.1px]">
                    hCaptcha
                    <br />
                  </span>
                  <span className="text-[8px]">Privacy - Terms</span>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <Button className="w-[336px] h-[54px] bg-[url(/group-4923-4.png)] bg-[100%_100%] font-button-nexira-DAEP font-[number:var(--button-nexira-DAEP-font-weight)] text-white text-[length:var(--button-nexira-DAEP-font-size)] tracking-[var(--button-nexira-DAEP-letter-spacing)] leading-[var(--button-nexira-DAEP-line-height)] [font-style:var(--button-nexira-DAEP-font-style)]">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>

        {/* Support Options */}
        <div className="w-full md:w-[489px] relative">
          <Card className="w-full h-full border-0 relative overflow-hidden">
            <div className="relative">
              <img
                className="absolute w-full h-[880px] top-0 left-0 z-0"
                alt="Background"
                src="./rectangle-329.svg"
              />
              <img
                className="absolute w-full h-32 top-0 left-0 z-0"
                alt="Header background"
                src="./rectangle-334.svg"
              />
              <img
                className="absolute w-full h-full top-0 left-0 z-0"
                alt="Union"
                src="./union-8.svg"
              />
              <img
                className="absolute w-[139px] h-2.5 top-0.5 left-1/2 -translate-x-1/2 z-0"
                alt="Rectangle"
                src="./rectangle-333.svg"
              />
            </div>

            <CardContent className="relative z-10 p-8">
              <h2 className="[font-family:'Rajdhani',Helvetica] font-bold text-white text-[38px] text-center mb-12">
                Other ways to get support:
              </h2>

              {/* Support options */}
              <div className="space-y-6">
                {supportOptions.slice(0, 2).map((option, index) => (
                  <div key={index} className="w-full h-20 relative">
                    <div className="relative w-full h-20 bg-[url(/rectangle-14.svg)] bg-[100%_100%]">
                      <div className="absolute w-[301px] top-4 left-24 [font-family:'Rajdhani',Helvetica] font-bold text-white-modebackground text-2xl tracking-[-0.48px] leading-[25px]">
                        {option.title}
                      </div>
                      <img
                        className="absolute w-[42px] h-12 top-4 left-8"
                        alt={index === 0 ? "FAQs" : "Chat"}
                        src={option.icon}
                      />
                    </div>
                  </div>
                ))}

                {/* Community forum option */}
                <div className="w-full relative mt-12">
                  <div className="relative w-full h-[116px] bg-[url(/rectangle-15.svg)] bg-[100%_100%]">
                    <div className="relative w-full h-[84px] top-[15px] px-2">
                      <img
                        className="absolute w-[66px] h-[66px] top-[9px] left-[9px] object-cover"
                        alt="Community"
                        src={supportOptions[2].icon}
                      />
                      <div className="absolute w-[308px] h-[75px] top-1 left-[82px]">
                        <div className="relative w-72 h-[75px] left-[7px]">
                          <div className="absolute w-[303px] -top-px left-0 [font-family:'Rajdhani',Helvetica] font-bold text-white-modebackground text-xl tracking-[-0.40px] leading-[25px]">
                            {supportOptions[2].title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative images */}
                <div className="w-full h-[401px] relative mt-8">
                  <img
                    className="absolute w-[282px] h-[399px] top-0 left-1/2 -translate-x-1/2 object-cover"
                    alt="Portal machine light"
                    src="./portalmachine-light-1.png"
                  />
                  <img
                    className="absolute w-[362px] h-[362px] top-[39px] left-1/2 -translate-x-1/2 object-cover"
                    alt="Character dancer"
                    src="./c-dancer-3-1.png"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
