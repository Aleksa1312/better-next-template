"use client";

import { IHeaderNavigationComponentProps } from "@/components/interfaces/HeaderNavigationComponent";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

export default function HeaderNavigation({ className, ...restProps }: IHeaderNavigationComponentProps) {
  return (
    <div
      className={className}
      {...restProps}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          }
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
