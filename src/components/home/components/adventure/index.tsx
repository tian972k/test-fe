import Button from "@/components/button";
import Icon from "@/components/icon";
import { classNames } from "@/lib/utils/classNames";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Adventure() {
  const t = useTranslations();
  const cases = t.raw("API.bloc_1.cases") as {
    category: string;
    cta: string;
    description: string;
    tagline: string;
  }[];
  const renderCard = () => {
    return (
      <>
        {cases.map((item, index) => (
          <div
            key={index}
            className={classNames("space-y-4 group mt-0", {
              "md:mt-11": index + 1 != 2,
            })}
          >
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg transform transition-all duration-500 ease-in-out group-hover:shadow-[0_0_30px_rgba(255,87,51,0.3)]">
              <Image
                src={`/image-adventure-${index + 1}.png`}
                alt={item.category}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h2 className="text-[#FF5733] font-medium text-[20px] leading-[30px] tracking-[0px]">
              {item.category}
            </h2>
            <h3 className="text-[#562C2C] text-[24px] font-medium leading-[32px]">
              {item.tagline}
            </h3>
            <p className="overflow-hidden text-[#562C2CCC] text-ellipsis text-[18px] font-normal leading-[24px] tracking-[-0.18px]">
              {item.description}
            </p>
            <Button
              suffixIcon={<Icon iconName="ArrowUpRight" />}
              className="md:w-[249px] justify-center hover:bg-[#F2542D] hover:text-white transition-all duration-300 px-4 py-[10px] border bg-[#FFF] border-[rgba(86, 44, 44, 0.30)] text-[#562C2C] text-[16px] font-medium leading-[20px] capitalize items-center text-nowrap"
            >
              {item.cta}
            </Button>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border desktop:border-2 border-[#BBBBBB]"></div>
            </div>
            <div className="relative flex justify-center">
              <h1 className="px-4 text-[24px] leading-[30px] desktop:text-[52px] desktop:leading-[60px] font-semibold bg-white text-[#E85B3F] text-center">
                {t("API.bloc_1.title")}
              </h1>
            </div>
          </div>
          <h2 className="font-normal text-[24px] leading-[30px] tracking-[0.25px] text-center">
            {t("API.bloc_1.subtitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">{renderCard()}</div>
      </div>
    </div>
  );
}
