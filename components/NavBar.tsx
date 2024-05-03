import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5 ">
        <Link href={"./"}></Link>
        <Image src={"./hilink-logo.svg"} alt="logo" width={74} height={29} />

        <ul className="hidden h-full gap-12 lg:flex"></ul>
      </nav>
    </div>
  );
};

export default NavBar;
