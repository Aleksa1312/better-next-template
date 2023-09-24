import { IButtonLinkComponentProps } from "../interfaces/ButtonLinkComponent";

import { Button } from "../ui/button";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

export default function ButtonLink({ href, children, className, ...restProps }: IButtonLinkComponentProps) {
  return (
    <Link href={href}>
      <Button
        className={twMerge("text-foreground", className)}
        {...restProps}
      >
        {children}
      </Button>
    </Link>
  );
}
