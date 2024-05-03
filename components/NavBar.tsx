import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const NavBar = () => {
  return (
    <div>
      <nav className=" padding-container max-container flexBetween relative z-30 py-5 flexBetween  ">
        <Link href={"./"}>
          <h3 className="font-lg font-extrabold text-xl lg:text-2xl text-slate-500 ">
            Camp<span className="text-orange-500">Gear</span>
          </h3>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Log in"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image
          src={"/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden "
        />
      </nav>
    </div>
  );
};

export default NavBar;
