import Heading from "./components/Heading";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Cards from "./components/Landing-Page/Cards";
import { MoveRight } from "lucide-react";
import HeadingMain from "./components/Landing-Page/HeadingMain";
import MainCard from "./components/Landing-Page/MainCard";
import ProductCarousel from "./components/Landing-Page/ProductCarousel";

// Load DM Sans font
const dmSans = DM_Sans({
  variable: "--font-dm-sans", // Reference to the font variable
  subsets: ["latin"], // Optional: load only Latin subset
});

export default function Home() {
  const cardsData = [
    {
      title: "Coiled\ncables",
      imageUrl: "/coiled-cables.png",
      altText: "Coiled cables",
      linkHref: "/",
      bgColor: "bg-[#ececec]",
      imageStyleClass: "h-[210px] object-cover object-center",
    },
    {
      title: "Eclipse\n60",
      imageUrl: "/eclipse-60.png",
      altText: "Eclipse 60 keyboard",
      linkHref: "/",
      isNew: true,
      bgColor: "bg-gradient-to-br from-[#ADD8E6] to-[#E6E6FA]",
      imageStyleClass: "h-[210px] object-cover object-center",
    },
    {
      title: "Arion\nDeskmats",
      imageUrl: "/deskmats.png",
      altText: "Arion Deskmat",
      linkHref: "/",
      bgColor: "bg-[#f7f7f7]",
      imageStyleClass: "top-[210px] h-full object-cover object-top",
    },
  ];

  return (
    <>
      <section className="relative pb-24 pt-16 sm:pb-32">
        <MaxWidthWrapper className="text-center">
          <HeadingMain />
          <MainCard />
          <Cards cards={cardsData} />
          <ProductCarousel/>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
