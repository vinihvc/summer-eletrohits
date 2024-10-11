import { cn } from "@/lib/utils";
import { AudioLines, Disc3, ListMusic, PartyPopper } from "lucide-react";
import Link from "next/link";
import { Hub } from "../icons/hub";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";
import { NavLink } from "../ui/nav-link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: SidebarProps) => {
  const { className, ...rest } = props;

  return <div className={cn("pb-12", className)} {...rest}></div>;
};
