"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

interface Props extends LinkProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const NavLink: React.FC<Props> = ({ href, ...rest }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <Link
      className={`${isActive ? "active" : ""} navlink`}
      href={href}
      {...rest}
    />
  );
};

export default NavLink;
