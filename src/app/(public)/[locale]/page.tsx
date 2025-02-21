import Adventure from "@/components/home/components/adventure";
import DiscoverCookMaster from "@/components/home/components/discover-cookMaster";
import ExploreMoreWithCookMaster from "@/components/home/components/explore-more-with-cookMaste";
import HeroBanner from "@/components/home/components/hero-banner";
import OutActives from "@/components/home/components/our-activities";
import SocialMedia from "@/components/home/components/social-media";
import UnforgettableExperiences from "@/components/home/components/unforgettable-experiences";
import Footer from "@/components/layout/footer";
import { Locale } from "@/config";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  return (
    <div>
      <HeroBanner />
      <Adventure />
      <ExploreMoreWithCookMaster />
      <OutActives lang={locale as Locale} />
      <UnforgettableExperiences />
      <SocialMedia />
      <DiscoverCookMaster />
    </div>
  );
}
