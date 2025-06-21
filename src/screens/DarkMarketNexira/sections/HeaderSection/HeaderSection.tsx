import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Define menu items data for easier mapping
const menuItems = [
  { label: "Home", active: false },
  { label: "Our Partners", active: false },
  { label: "Who We Are", active: false },
  { label: "Tokens", active: false, hasDropdown: true },
  { label: "How To Join", active: false },
  { label: "Marketplace", active: true, hasDropdown: true },
  { label: "FAQs", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-[70px] flex items-center justify-between px-20">
      {/* Logo Section */}
      <div className="h-[35px] flex items-center">
        <div className="w-[31px] h-[35px] bg-[url(/vector.svg)] bg-[100%_100%] relative">
          <div className="relative w-[21px] h-5 top-[7px] left-[5px]">
            <img
              className="absolute w-[15px] h-5 top-0 left-0"
              alt="Vector"
              src="./vector-8.svg"
            />
            <img
              className="absolute w-[9px] h-[9px] top-0 left-[11px]"
              alt="Vector"
              src="./vector-2.svg"
            />
            <img
              className="absolute w-[9px] h-[9px] top-[11px] left-[11px]"
              alt="Vector"
              src="./vector-3.svg"
            />
          </div>
        </div>
        <img
          className="w-[85px] h-[17px] ml-2"
          alt="Nexira Logo"
          src="./vector-1.svg"
        />
      </div>

      {/* Navigation Menu */}
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex gap-8">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`flex items-center gap-1 ${
                  item.active
                    ? "[font-family:'Rajdhani',Helvetica] font-bold text-[#2d76ff] text-base text-center tracking-[0] leading-7"
                    : "[font-family:'Rajdhani',Helvetica] font-semibold text-[#ffffff99] text-base text-center tracking-[0] leading-7"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <img
                    className="w-[9px] h-1.5"
                    alt="Dropdown"
                    src="./frame-93.svg"
                  />
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* User Profile Section */}
      <div className="flex items-center gap-2.5">
        {/* Notification Button */}
        <div className="relative w-[34px] h-[34px]">
          <div className="flex flex-col w-[34px] h-[34px] items-start">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-5.svg"
              />
              <div className="relative flex-1 grow h-[11px] bg-black-modecore-button-30 border-t [border-top-style:solid] border-[#215dd6]" />
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-6-1.svg"
              />
            </div>
            <div className="relative flex-1 self-stretch w-full grow bg-black-modecore-button-30 border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#215dd6]" />
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-6.svg"
              />
              <div className="bg-black-modecore-button-30 border-b [border-bottom-style:solid] border-[#215dd6] relative flex-1 grow h-[11px]" />
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-5-1.svg"
              />
            </div>
          </div>
          <img
            className="absolute w-3 h-[18px] top-2 left-[11px]"
            alt="Rectangle"
            src="./rectangle-132.svg"
          />
        </div>

        {/* User Profile Button */}
        <div className="flex w-36 h-[34px] relative">
          <div className="flex flex-col h-[34px] items-start relative self-stretch w-full">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-5.svg"
              />
              <div className="bg-[#1a244b] border-t [border-top-style:solid] border-[#364066] relative flex-1 grow h-[11px]" />
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-6-1.svg"
              />
            </div>
            <div className="relative flex-1 self-stretch w-full grow bg-[#1a244b] border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#364066]" />
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-6.svg"
              />
              <div className="bg-[#1a244b] border-b [border-bottom-style:solid] border-[#364066] relative flex-1 grow h-[11px]" />
              <img
                className="relative w-[11px] h-[11px]"
                alt="Component"
                src="./component-5-1.svg"
              />
            </div>
          </div>
          <div className="flex h-[34px] items-center justify-center gap-1.5 px-4 py-1.5 absolute inset-0">
            <img
              className="w-[18px] h-[18px] object-cover"
              alt="Rectangle"
              src="./rectangle-319.png"
            />
            <div className="[font-family:'Rajdhani',Helvetica] font-semibold text-black-modetext-title text-sm tracking-[0] leading-[normal]">
              damcu13
            </div>
            <Avatar className="w-[22px] h-[22px]">
              <AvatarImage src="./avatar.png" alt="User Avatar" />
              <AvatarFallback>DC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
