import { twMerge } from "tailwind-merge";
import { ILinkComponentProps } from "../interfaces/LinkComponent";

import Link from "next/link";

export default function LogoLink({ href, className, ...restProps }: ILinkComponentProps) {
  return (
    <Link
      href={href}
      {...restProps}
      className={twMerge("group text-2xl font-semibold", className)}
    >
      Code<span className="duration-200 group-hover:text-primary">X</span>n
    </Link>
  );
}
