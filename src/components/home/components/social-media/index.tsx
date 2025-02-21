import Icon from "@/components/icon";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

const SocialMedia = (props: Props) => {
  const t = useTranslations();

  const reviews = t.raw("API.bloc_5.reviews") as {
    author: string;
    review: string;
    date: string;
  }[];
  const mainReview = reviews[0];
  const posts = reviews.slice(1, reviews.length);

  const instagramPosts = [
    {
      image: "/social-media-card-image-1.png",
      backgroundColor: "bg-[#ffd4e5]", // Pink
      author: posts[0].author,
    },
    {
      image: "/social-media-card-image-2.png",
      backgroundColor: "bg-[#d4f3e9]", // Mint
      author: posts[1].author,
    },
    {
      image: "/social-media-card-image-3.png",
      backgroundColor: "bg-[#d4e9ff]", // Light blue
      author: posts[2].author,
    },
    {
      image: "/social-media-card-image-4.png",
      backgroundColor: "bg-[#d4e9ff]", // Light blue
      author: posts[3].author,
    },
  ];
  return (
    <section className="bg-gradient-to-b from-[rgba(255,255,255,0)] to-[#FFFFFF] bg-[#EAFCFF]">
      <div className="container mx-auto pt-[60px]">
        <div className="space-y-4 flex justify-between items-center flex-col md:flex-row mb-[32px]">
          <p className="text-[#562C2CCC] text-[14px] font-normal leading-[26px] max-w-[564px] lg:text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>

          <h1 className="text-[#562C2C]  lg:text-[40px] text-[24px] font-semibold leading-[54px] uppercase flex-1 max-w-[595px] ">
            IMMORTALISEZ DES MOMENTS
            <br />
            INOUBLIABLES AVEC <span className="text-[#ff4d00]">#BASIC</span>
          </h1>
        </div>
        <div className="bg-[url('/brooke-lark.png')] bg-cover bg-center bg-no-repeat aspect-[1240/694] flex items-center justify-center">
          <div className="px-4 max-w-[1030px] w-full mx-auto">
            <div className="p-[10px] bg-white rounded-2xl m-4">
              <div className="relative w-full aspect-[1011/463] rounded-lg overflow-hidden">
                <Image
                  src="/share-your-adventures.png"
                  alt="share-your-adventures"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-2">
                  <h1 className="text-black text-[20px] font-semibold leading-normal tracking-[-0.2px] ">
                    {mainReview.author}
                  </h1>
                  <p className="text-[#666] text-[18px] font-normal leading-[24px] tracking-[-0.18px] hidden md:block">
                    {mainReview.review}
                  </p>
                </div>
                <div className="px-4 py-[6px] rounded-[999px] border border-[rgba(102, 102, 102, 0.10)] text-nowrap">
                  {mainReview.date}
                </div>
              </div>
              <p className="text-[#666] text-[18px] font-normal leading-[24px] tracking-[-0.18px] block md:hidden mt-2">
                {mainReview.review}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-6 px-4">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className={`overflow-hidden ${post.backgroundColor} relative rounded-lg`}
            >
              <div className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between bg-black/30 p-3 text-white backdrop-blur-sm absolute w-full bottom-0 z-10">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <Icon iconName="ArrowUpRight" className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[#666] text-center text-[14px] font-normal leading-normal tracking-[-0.14px] mb-8">
          {t("API.bloc_5.footer")}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
