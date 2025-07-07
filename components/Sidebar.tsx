"use client";

import React from "react";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex flex-col justify-between w-fit h-screen bg-light-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Button
              variant="secondary"
              key={link.label}
              className={cn(
                "flex flex-row items-center justify-start px-4 py-7 rounded-lg",
                { "bg-blue-1": isActive }
              )}
            >
              <Link
                href={link.route}
                key={link.label}
                className="flex flex-row items-center"
              >
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  width={24}
                  height={24}
                  className={`filter ${isActive ? "" : "invert"}`}
                />
                <p
                  className="text-lg font-semibold ml-2"
                  style={{ color: isActive ? "#FFFFFF" : "#030711" }}
                >
                  {link.label}
                </p>
              </Link>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
