"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Map from "./components/map";
import Icon from "@/components/icon";
import Calendar from "./components/calendar";
import { Locale } from "@/config";
import ContactForm from "./components/contact";

type Activity = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

type Props = {
  lang: Locale;
};

const OutActives = ({ lang }: Props) => {
  const t = useTranslations("API");
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const activities: Activity[] = [
    { id: 1, name: "Activité 1", icon: <Icon iconName="Mountains" className="w-7 h-7" /> },
    { id: 2, name: "Activité 2", icon: <Icon iconName="Fishing" className="w-7 h-7" /> },
    { id: 3, name: "Activité 3", icon: <Icon iconName="Crosshair" className="w-7 h-7" /> },
  ];

  const handleActivityClick = (activityId: number) => {
    setSelectedActivity(activityId);
  };

  return (
    <>
      {/* MAP */}
      <div className="bg-[#FFF6F4]">
        <div className="bg-[url('/shutterstock-bg.png')] bg-cover bg-center bg-no-repeat">
          <section className="lg:max-w-[1240px] mx-auto lg:py-[60px] px-4 py-[32px]">
            <div className="relative flex justify-center gap-5 md:10 items-center">
              <div className="flex-1 h-[2px] bg-[#BBB]"></div>
              <h1 className="px-4 text-[24px] leading-[30px] lg:text-[52px] lg:leading-[60px] font-semibold bg-[#FFF6F4] text-[#E85B3F] text-nowrap">
                {t("bloc_2.title")}
              </h1>
              <div className="flex-1 h-[2px] bg-[#BBB]"></div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-8">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => handleActivityClick(activity.id)}
                  className={`flex text-[14px] leading-[20px] font-medium items-center gap-2 px-4 py-[6px] rounded-full border-[1.5px] border-[#F2542D80] 
                ${selectedActivity === activity.id ? "bg-[#F2542D] text-white" : "bg-white hover:bg-gray-50 text-[#562C2C]"}`}
                >
                  <span>{activity.icon}</span>
                  <span className="text-[20px] font-medium leading-[20px] capitalize">
                    {activity.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="shadow-lg rounded-[20px] overflow-hidden">
              <Map />
            </div>
          </section>
        </div>
      </div>
      {/* CALENDER */}
      <div>
        {/* Header */}
        <section className="lg:max-w-[1240px] mx-auto lg:py-[60px] px-4 py-[32px]">
          <div className="relative flex justify-center gap-5 md:gap-10 items-center mb-10">
            <div className="flex-1 md:w-[200px] h-[2px] bg-[#BBB]"></div>
            <h1 className="px-4 text-[24px] leading-[30px] lg:text-[52px] lg:leading-[60px] font-semibold text-[#E85B3F] text-nowrap">
              {t("bloc_2_2.title")}
            </h1>
            <div className="flex-1 md:w-[200px] h-[2px] bg-[#BBB]"></div>
          </div>
          <Calendar
            locale={lang as Locale}
            occupiedDates={["2025-01-28", "2025-01-29", "2025-02-04"]}
          />
          <div className="mt-10">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default OutActives;
