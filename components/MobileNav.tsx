"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={28}
            height={28}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden bg-dark-2 hover:bg-dark-3 rounded-full p-1 transition-colors duration-200"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 py-4 pl-6">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.png"
              width={64}
              height={64}
              alt="novazoom logo"
              className="w-10 mr-1"
            />
            <p className="text-[26px] font-extrabold text-white">NOVAZOOM</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-4 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgUrl}
                          alt={item.label}
                          width={28}
                          height={28}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
