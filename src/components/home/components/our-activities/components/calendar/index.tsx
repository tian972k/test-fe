import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { classNames } from "@/lib/utils/classNames";

// Language mapping for English and French
const localeMapping: Record<"en" | "fr", { days: string[]; months: string[] }> = {
  en: {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  fr: {
    days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    months: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
  },
};

// Props Interface
interface CalendarProps {
  locale?: "en" | "fr"; // Only English and French supported
  initialDate?: string; // Initial date in "YYYY-MM-DD" format
  occupiedDates?: string[]; // List of occupied dates
}

interface CalendarDay {
  day: number;
  isOccupied: boolean;
  isCurrentMonth: boolean;
}

const Calendar: React.FC<CalendarProps> = ({
  locale = "fr",
  initialDate = dayjs().format("YYYY-MM-DD"),
  occupiedDates = [],
}) => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs(initialDate));

  const localeData = localeMapping[locale];

  // Get first day & total days in month
  const firstDayOfMonth = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  // Get previous month's total days
  const prevMonthDays = currentDate.subtract(1, "month").daysInMonth();

  // Generate 42 days for full calendar view
  const generateDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const firstWeekdayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

    // Fill previous month's days
    for (let i = firstWeekdayIndex - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isOccupied: false,
        isCurrentMonth: false,
      });
    }

    // Fill current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = currentDate.set("date", day).format("YYYY-MM-DD");
      days.push({
        day,
        isOccupied: occupiedDates.includes(date),
        isCurrentMonth: true,
      });
    }

    // Fill next month's days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isOccupied: false,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  // Handle Month Navigation
  const changeMonth = (direction: number) => {
    setCurrentDate(currentDate.add(direction, "month"));
  };

  return (
    <div className="w-full mx-auto py-6 px-8 rounded-[24px] border border-[rgba(86,44,44,0.30)] bg-white shadow-[0px_0px_30px_0px_rgba(242,84,45,0.10)]">
      {/* Month Navigation */}
      <div className="flex justify-center">
        <div className="flex gap-2 items-center mt-2 text-gray-700">
          <button onClick={() => changeMonth(-1)} aria-label="Previous month">
            <ChevronLeft className="w-5 h-5 text-[#F2542D]" />
          </button>
          <span className="text-[20px] font-semibold">
            {localeData.months[currentDate.month()]} {currentDate.year()}
          </span>
          <button onClick={() => changeMonth(1)} aria-label="Next month">
            <ChevronRight className="w-5 h-5 text-[#F2542D]" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mt-4">
        {localeData.days.map((day) => (
          <div key={day} className="text-center font-semibold text-[#562C2C]">
            {day}
          </div>
        ))}

        {generateDays().map((day, index) => (
          <div
            key={index}
            className={classNames(
              "py-2 text-center text-[20px] font-semibold leading-[24px] tracking-[-0.14px] rounded-xl border flex md:justify-between md:items-center flex-col md:flex aspect-square lg:aspect-video",
              day.isCurrentMonth
                ? day.isOccupied
                  ? "bg-gray-200 text-gray-500"
                  : "border-[#F2542D] text-[#562C2C] bg-[#FFF4F1]"
                : "bg-[#F5F5F5] text-[#CCC] border-[#DFDFDF]",
            )}
          >
            <span>{day.day}</span>

            {day.isCurrentMonth && (
              <span
                className={classNames(
                  "hidden md:block text-[18px] font-normal",
                  day.isOccupied ? "text-[#AAA]" : "text-[#F2542D]",
                )}
              >
                {day.isOccupied
                  ? locale === "fr"
                    ? "Occupé"
                    : "Occupied"
                  : locale === "fr"
                    ? "Libre"
                    : "Free"}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
