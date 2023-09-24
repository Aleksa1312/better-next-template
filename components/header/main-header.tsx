import ButtonLink from "../link/button-link";
import LogoLink from "../link/logo-link";
import HeaderNavigation from "./navigation/header-navigation";

export default function MainHeader() {
  return (
    <header className="sticky left-0 top-0 h-16 w-full">
      <div className="drop-shadow-black h-full w-full border-b border-border bg-background/50 drop-shadow-lg backdrop-blur-sm">
        <div className="flex h-full w-full flex-row items-center justify-between p-5">
          <LogoLink href="/" />
          <HeaderNavigation className="" />
          <ButtonLink href="/pricing">View Options</ButtonLink>
        </div>
      </div>
    </header>
  );
}
