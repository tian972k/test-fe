"use client";
import { useLocale } from "next-intl";
import type { Locale } from "@/config";
import { Link, usePathname } from "@/i18n/routing.public";
import { classNames } from "@/lib/utils/classNames";

const Language = ({ className = "" }: { className?: string }) => {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className={classNames("flex items-center gap-2", className)}>
      <div className="relative flex h-7 w-[68px] items-center rounded-full bg-gray-200 p-1">
        {/* Sliding indicator */}
        <span
          className={classNames(
            "absolute h-5 w-8 rounded-full bg-white transition-transform duration-200 ease-in-out",
            currentLocale === "en" ? "translate-x-0" : "translate-x-[32px]",
          )}
        />
        {/* Language links with labels */}
        <Link
          href={pathname}
          locale="en"
          className="absolute left-0 z-10 flex h-full w-1/2 items-center justify-center"
          aria-label="Switch to English"
        >
          <span
            className={classNames(
              "relative z-20 text-xs font-medium",
              currentLocale === "en" ? "text-gray-800" : "text-gray-500",
            )}
          >
            EN
          </span>
        </Link>
        <Link
          href={pathname}
          locale="fr"
          className="absolute right-0 z-10 flex h-full w-1/2 items-center justify-center"
          aria-label="Switch to French"
        >
          <span
            className={classNames(
              "relative z-20 text-xs font-medium",
              currentLocale === "fr" ? "text-gray-800" : "text-gray-500",
            )}
          >
            FR
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Language;
