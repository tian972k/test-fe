import Button from "@/components/button";
import Icon from "@/components/icon";
import React from "react";

type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <section>
      <div className="bg-[url(/hero-image.png)] bg-cover bg-center bg-no-repeat h-screen relative pb-10">
        <div className="absolute bottom-20 desktop:bottom-10 w-full border-t border-[#FFFFFF4D] lg:container lg:left-[50%] lg:transform lg:-translate-x-1/2">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center p-6 gap-3 text-white">
              <Icon iconName="Mountains" className="w-8 h-8" />
              <h1 className="font-semibold text-[18px] leading-[24px] tracking-[5%] text-center">
                Activité 1
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-6 gap-3 text-white">
              <Icon iconName="Fishing" className="w-8 h-8" />
              <h1 className="font-semibold text-[18px] leading-[24px] tracking-[5%] text-center">
                Activité 1
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-6 gap-3 text-white">
              <Icon iconName="Crosshair" className="w-8 h-8" />
              <h1 className="font-semibold text-[18px] leading-[24px] tracking-[5%] text-center">
                Activité 1
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute xl:right-[160px] bottom-5 right-4 lg:bottom-[40px] lg:right-[24px] xl:bottom-[92px]">
          <Button
            className="bg-[#F2542D] border border-transparent p-3 text-white hover:bg-[#CA3E1B] hover:border-[#F2542D] transition-all duration-300"
            suffixIcon={<Icon iconName="Chats" className="w-6 h-6" />}
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
