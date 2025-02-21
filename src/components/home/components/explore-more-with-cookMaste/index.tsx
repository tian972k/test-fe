import Button from "@/components/button";
import Icon from "@/components/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/i18n/routing.public";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const ExploreMoreWithCookMaster = (props: Props) => {
  const t = useTranslations();
  const items = t.raw("API.bloc_3.cases") as {
    category: string;
    tagline: string;
    description: string;
  }[];
  return (
    <section>
      <div className="px-4 py-8 md:px-6 container mx-auto overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[24px] text-center md:text-left lg:text-[48px] font-semibold text-[#F2542D]">
            {t("API.bloc_3.title")}
          </h2>
          <Link
            href="#"
            className=" items-center text-[20px] font-medium text-[#666] hover:text-gray-900 transition-colors hidden md:flex"
          >
            {t("API.bloc_3.more_info")}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full md:ml-10 lg:ml-[105px]"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <div className="space-y-3">
                  <img
                    src={`/image-food-${index + 1}.png`}
                    alt={`Food image ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <h3 className="text-[#FF6B4E] font-medium">{item.category}</h3>
                  <p className="font-semibold text-lg">{item.tagline}</p>
                  <p className="text-sm text-gray-600 line-clamp-3 pl-4 pt-4 border-l">
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Button
          className="bg-[#F2542D] w-full md:hidden justify-center text-[16px] mt-6 border border-transparent px-4 py-2 text-white hover:bg-[#CA3E1B] hover:border-[#F2542D] transition-all duration-300"
          suffixIcon={<Icon iconName="ArrowUpRight" className="w-6 h-6" />}
        >
          {t("API.bloc_3.more_info")}
        </Button>
      </div>
    </section>
  );
};

export default ExploreMoreWithCookMaster;
