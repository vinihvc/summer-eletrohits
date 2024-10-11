import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { cn } from "@/lib/utils";
import { AudioLines, Disc3, Github, PartyPopper } from "lucide-react";
import Link from "next/link";
import { RemoveScroll } from "react-remove-scroll";
import { HeaderTheme } from "./header.theme";

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props;

  return (
    <header
      className={cn(
        "sm:fixed container top-0 sm:top-5 inset-x-0 z-50 max-sm:shadow-[0px_1px_1px_rgba(240,240,240,.60),0px_0px_1px_inset_#fffbed3c] dark:max-sm:shadow-[0px_1px_1px_rgba(0,0,0,.95),0px_0px_1px_inset_#fffbed3c] bg-background/40 dark:bg-background/80 backdrop-blur sm:rounded-xl flex h-14 items-center justify-between",
        RemoveScroll.classNames.zeroRight,
        className
      )}
      {...rest}
    >
      <Link
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-4 ring-offset-background rounded-full"
        href="/"
      >
        <Logo />
      </Link>

      <nav className="flex gap-4 max-sm:hidden">
        <Button variant="ghost" className="gap-2" asChild>
          <NavLink
            href="/party"
            className="[&.active]:bg-primary [&.active]:text-white"
          >
            <PartyPopper className="size-4" />
            Party
          </NavLink>
        </Button>

        <Button variant="ghost" className="gap-2" asChild>
          <NavLink
            href="/queue"
            className="[&.active]:bg-primary [&.active]:text-white"
          >
            <AudioLines className="size-4" />
            Playing
          </NavLink>
        </Button>

        <Button variant="ghost" className="gap-2" asChild>
          <NavLink
            href="/songs"
            className="[&.active]:bg-primary [&.active]:text-white"
          >
            <Disc3 className="size-4" />
            Albums
          </NavLink>
        </Button>
      </nav>

      <nav className="flex items-center gap-4">
        <HeaderTheme />

        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://github.com/vinihvc/summer-eletrohits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
};
