import Icon from "@/components/icon";
import { Link } from "@/i18n/routing.public";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const t = useTranslations();
  const links = t.raw("API.footer.links") as { name: string; url: string }[];
  console.log("🚀 ~ Footer ~ links:", links);
  const activities = links.slice(0, 3);
  const titles = links.slice(3, 6);
  const additionalLinks = links.slice(6, 8);
  return (
    <footer className="bg-[#562C2C]">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="font-normal text-[18px] leading-[24px] tracking-[0px] text-white">
              {t("API.footer.address.name")}
            </h2>
            <p className="text-white font-normal text-[18px] leading-[24px] tracking-[0px]">
              {t("API.footer.address.phone")}
            </p>
            <p className="text-white font-normal text-[18px] leading-[24px] tracking-[0px]">
              {t("API.footer.address.location")}
            </p>
          </div>

          {/* Activities */}
          <div className="space-y-2">
            {activities.map((activity) => (
              <Link
                key={activity.url}
                href={`${activity.url}`}
                className="block text-gray-300 hover:text-white text-center font-normal text-[18px] leading-[27px] tracking-[0px]"
              >
                {activity.name}
              </Link>
            ))}
          </div>

          {/* Titles */}
          <div className="space-y-2">
            {titles.map((title) => (
              <Link
                key={title.url}
                href={`/${title.url}`}
                className="block text-gray-300 hover:text-white text-center font-normal text-[18px] leading-[27px] tracking-[0px]"
              >
                {title.name}
              </Link>
            ))}
          </div>

          {/* Additional Links */}
          <div className="space-y-2">
            {additionalLinks.map((link) => (
              <Link
                key={link.url}
                href={`/${link.url}`}
                className="block text-gray-300 hover:text-white text-center font-normal text-[18px] leading-[27px] tracking-[0px]"
              >
                {link.name}
              </Link>
            ))}
            {/* <Link href="#" className="block text-gray-300 hover:text-white text-center">
              Blog
            </Link>
            <Link href="#" className="block text-gray-300 hover:text-white text-center">
              Nous contacter
            </Link> */}
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 pt-4 border-t border-[#FFFFFF4D] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white font-normal text-[18px] leading-[24px] tracking-[0px]">
            © BASIC 2024
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white hover:text-white p-1 bg-[#F2542D] rounded-full">
              <Icon iconName="Facebook" className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white hover:text-white p-1 bg-[#F2542D] rounded-full">
              <Icon iconName="Instagram" className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-white hover:text-white p-1 bg-[#F2542D] rounded-full">
              <Icon iconName="Instagram" className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
