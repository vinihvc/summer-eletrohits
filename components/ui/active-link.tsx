"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {}

export const ActiveLink = (props: ActiveLinkProps) => {
  const { href, children, ...rest } = props;

  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
};
