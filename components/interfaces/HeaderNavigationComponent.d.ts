import { HTMLAttributes } from "react";

export interface IHeaderNavigationComponentProps extends HTMLAttributes<HTMLDivElement> {}

export interface IHeaderNavigationContentItemProps {
  href: string;
  title: string;
  description: string;
}
