import React from "react"
import { twMerge } from "tailwind-merge"

import { Button } from "./ui/button"

interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
  className?: string
  children: React.ReactNode
}

const ButtonLink = ({
  href,
  children,
  className,
  ...rest
}: ButtonLinkProps) => {
  const buttonClasses = twMerge(
    "h-8 w-8 rounded-full bg-violet-vertical",
    className,
  )

  return (
    <Button className={buttonClasses} {...rest}>
      <a
        className="rounded-full bg-primary p-[6px]"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  )
}

export default ButtonLink
