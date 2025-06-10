import React from 'react'
import Image from "next/image";
import { MoveRight } from "lucide-react";
const MainCard = () => {
  return (
    <div className="w-full py-10 md:py-16 bg-gradient-to-b from-[#001834] to-[#001834D9]/80 rounded-lg flex max-md:flex-col text-start max-md:text-center gap-5 my-12">
            <div className="p-12 col-span-2 space-y-4">
              <div className="inline-block rounded-full py-1 px-4 bg-white text-purple-500 text-xs font-semibold">
                NEW
              </div>
              <h1 className="text-white font-semibold text-3xl md:text-4xl">
                Arion FROST
              </h1>
              <p className="text-white/90 text-base">
                A masterpiece of modern engineering
                <br />
                and design that&apos;s set to redefine your keyboard experience.
              </p>
              <p className=" group text-xl font-medium text-white flex gap-2 items-end">Buy Now <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"/></p>
            </div>

            <Image
              src="/arionfrost.png"
              width={4096}
              height={1387}
              alt="arionfrost"
              className="w-full max-md:h-80 object-cover object-left overflow-hidden"
            />
          </div>
  )
}

export default MainCard