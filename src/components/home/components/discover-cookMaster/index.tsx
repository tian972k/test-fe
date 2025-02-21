import Button from "@/components/button";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const DiscoverCookMaster = () => {
  const t = useTranslations();
  return (
    <section className="w-full lg:min-h-[666px] md:bg-[url('/discover-cookMaster-bg.png')] bg-[url('/discover-cookMaster-bg-mb.png')] bg-cover bg-no-repeat bg-center flex items-center md:items-start justify-center">
      <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] via-transparent to-[rgba(0,0,0,0.20)] min-h-[666px]">
        <div className="pt-[70px] text-center">
          <h2 className="text-[#562C2C] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-semibold">
            {t("API.bloc_6.title")}
          </h2>
          <h2 className="text-[rgba(86,44,44,0.50)] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-semibold leading-6">
            {t("API.bloc_6.subtitle")}
          </h2>
          <p className="mb-10 mt-6 text-[#562C2C] text-center text-sm md:text-[24px] font-normal leading-normal">
            {t("API.bloc_6.text")}
          </p>
          <div className="flex justify-center">
            <Button
              className="max-w-[152px] w-full bg-[#F2542D] hover:border-[#F2542D] transition-all duration-300 justify-center border border-transparent px-4 py-2 text-white
            hover:bg-[#CA3E1B] "
            >
              {t("API.bloc_6.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCookMaster;
