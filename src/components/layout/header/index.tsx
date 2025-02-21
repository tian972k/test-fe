import Button from "@/components/button";
import Icon from "@/components/icon";
import Language from "@/components/language";
import Menu from "@/components/menu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const t = useTranslations();
  const cases = t.raw("API.head_menu") as string[];
  const navigationLinks = [
    { href: "/book-class", label: cases[0] },
    { href: "/chefs", label: cases[1] },
    { href: "/packages", label: cases[2] },
    { href: "/blog", label: cases[3] },
  ];

  return (
    <header className="flex justify-between items-center p-4 border-b border-white/20 bg-[#562C2C]/70 backdrop-blur-md fixed top-0 w-full z-10">
      <div className="w-full lg:container mx-auto flex justify-between items-center">
        <div className="flex gap-[93px]">
          <Link href="/" aria-label="Home">
            <h1 className="text-white font-bold text-[15px] leading-[22.5px] tracking-normal">
              LOGO SAMPLE
            </h1>
          </Link>
          <nav className="hidden gap-6 lg:flex" aria-label="Main navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-[16px] leading-[24px] tracking-normal text-white hover:text-gray-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="">
          <div className="hidden lg:flex lg:gap-[22px] items-center">
            <div className="flex gap-4">
              <Icon
                iconName="Mountains"
                className="text-white hover:text-[#F2542D] transition-all duration-300 cursor-pointer"
              />
              <Icon
                iconName="Fishing"
                className="text-white hover:text-[#F2542D] transition-all duration-300 cursor-pointer"
              />
              <Icon
                iconName="Crosshair"
                className="text-white hover:text-[#F2542D] transition-all duration-300 cursor-pointer"
              />
            </div>
            <div>
              <Button
                className="bg-[#F2542D] border border-transparent px-4 py-2 text-white hover:bg-[#CA3E1B] hover:border-[#F2542D] transition-all duration-300"
                suffixIcon={<Icon iconName="ArrowUpRight" className="w-6 h-6" />}
              ></Button>
            </div>
            <div>
              <Language className="text-white" />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
