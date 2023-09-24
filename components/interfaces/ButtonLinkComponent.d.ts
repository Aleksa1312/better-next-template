import { HTMLAttributes, ReactNode } from "react";
import { ButtonProps } from "../ui/button";

export interface IButtonLinkComponentProps extends ButtonProps {
  href: string;
}
