import { cn } from "@/lib/utils"
import React, { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-black !leading-[55px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export default Heading
