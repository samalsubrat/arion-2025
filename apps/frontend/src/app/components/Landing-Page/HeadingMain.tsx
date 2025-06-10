import React from 'react'
import { DM_Sans } from "next/font/google";
import Heading from "@/app/components/Heading";
import { AuroraText } from '@/components/magicui/aurora-text';
const dmSans = DM_Sans({
    variable: "--font-dm-sans", // Reference to the font variable
    subsets: ["latin"], // Optional: load only Latin subset
});

const HeadingMain = () => {

    return (
        <div
            className={`${dmSans.variable} font-dmSans relative mx-auto text-center flex flex-col items-center gap-10`}
        >
            <div>
                <Heading className="font-bold">
                    <span>Arion brings you most durable & premium</span>
                    <br />
                    <AuroraText speed={2}>
                        Keyboards and Accessories
                    </AuroraText>
                    {/* <span className="relative bg-gradient-to-r from-[#25B0CF] to-[#EB45F9] via-[#4766D1] text-transparent bg-clip-text">
                        Keyboards and Accessories
                    </span> */}
                </Heading>
            </div>
        </div>
    )
}

export default HeadingMain