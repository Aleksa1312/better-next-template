import { HTMLAttributes, ReactNode } from "react";

export interface ILinkComponentProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode | ReactNode[];
}
