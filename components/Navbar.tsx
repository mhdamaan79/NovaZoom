import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-white-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          width={64}
          height={64}
          alt="NovaZoom Logo"
          className="w-28 sm:w-24 -ml-7 sm:-mr-8 sm:-ml-8 lg:-ml-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          NovaZoom
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
