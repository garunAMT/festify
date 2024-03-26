"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Button } from "../ui/button";

import { SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="mx-4 py-1 flex justify-between sticky top-0 z-10">
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">Festify</h1>
      </div>

      {/* ----------DESKTOP NAVBAR------------- */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#Events" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#Host" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Host
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SignedOut><Link href="/sign-in" passHref><Button>Sign In</Button></Link></SignedOut>
              <SignedIn><UserButton /></SignedIn>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* ----------MOBILE NAVBAR-------------- */}
      <div className="md:hidden flex gap-2">
        <ModeToggle />
        <UserButton />
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="flex items-center justify-center">
              <ul className="text-xl text-center flex flex-col gap-10 items-center justify-center">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#Events">Events</Link></li>
                <li><Link href="#Host">Host</Link></li>
              </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;