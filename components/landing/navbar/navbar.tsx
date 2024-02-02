import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "../../ui/theme-toggler";
import { HiDownload } from "react-icons/hi";
import { navItems } from "./nav-items";
import SocialsDropdown from "../../ui/dropdown/socials-dropdown";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavigationMenu } from "./nav-menu";

export const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 border-b shadow-sm w-full h-14 px-4 bg-background/60 backdrop-blur-md flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="sm:flex items-center hidden">
          {navItems.map((item) => {
            return (
              <Button
                key={item.id}
                className="space-x-1 hover:no-underline hover:text-blue-500"
                variant={"link"}
                size={"sm"}
                asChild
              >
                <Link href={item.source}>{item.name}</Link>
              </Button>
            );
          })}
          <SocialsDropdown />
        </div>

        <div className="flex items-center justify-between sm:justify-normal w-full sm:w-auto space-x-4">
          <Button
            className="bg-gradient-to-r from-red-600 to-pink-600 text-neutral-100 font-semibold"
            size={"sm"}
            asChild
          >
            <Link href={""}>Contact Me</Link>
          </Button>

          <div className="flex items-center space-x-2">
            <ModeToggle />

            <div className="block sm:hidden">
              <NavigationMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;