import * as React from "react";
import { Button } from "@/components/ui/button";
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
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { SocialItems } from "../../ui/dropdown/social-items";

export function NavigationMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent border-none"
          size={"icon"}
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="w-full flex flex-col items-center text-center">
            <DrawerTitle>Shivam&#39;s Portfolio Website</DrawerTitle>
            <DrawerDescription className="mt-8 ">My Socials:</DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-16">
            <div className="flex flex-col items-center justify-center space-y-2 text-lg">
              <div>
                {SocialItems.map((items) => {
                  return (
                    <Button
                      key={items.id}
                      className=" hover:text-blue-500"
                      variant={"link"}
                    >
                      <Link
                        href={items.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {items.icon}
                      </Link>
                    </Button>
                  );
                })}
              </div>

              <Button size={"lg"} variant={"link"} asChild>
                <DrawerClose>
                  <Link href={""}></Link>
                </DrawerClose>
              </Button>
            </div>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
