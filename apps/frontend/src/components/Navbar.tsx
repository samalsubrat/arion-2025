'use client'

import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import ShinyButton from './ShinyButton'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest
    const previous = lastScrollY
    const diff = current - previous

    if (Math.abs(diff) < 10) return

    if (diff > 0 && current > 300) {
      // Scrolling down and past 300px
      setHidden(true)
    } else {
      // Scrolling up or before 300px
      setHidden(false)
    }

    setLastScrollY(current)
  })

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className='sticky top-0 bg-white/60 z-50 backdrop-blur-md'
      >
        <MaxWidthWrapper className='h-16 flex items-center justify-between'>
          <Image src="/arion-text-logo.png" alt="logo" width={177} height={22} />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Arion Products
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our range of innovative products designed to enhance your experience.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/products/software"
                        >
                          <div className="text-sm font-medium leading-none">Arion Frost</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            TKL | Wireless | Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/products/hardware"
                        >
                          <div className="text-sm font-medium leading-none">Arion</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Cutting-edge hardware designed for optimal performance.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <ShinyButton className="inline-block py-1 px-4 md:py-1 md:px-3 bg-[#001834]">
              Show Me
            </ShinyButton>
          </NavigationMenu>

        </MaxWidthWrapper>
        <div className='border-b border-gray-200 shadow-lg bg-none' />
      </motion.nav>
    </>
  )
}

export default Navbar