import {
  BiLogoGithub,
  BiLogoInstagram,
  // BiLogoFacebookSquare,
  BiLogoGmail,
  // BiLogoTelegram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown/dropdown-menu";
import { Button } from "../button";
import { SocialItems } from "./social-items";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const SocialsDropdown = () => {
  return (
    <div className="flex items-center space-x-16">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            size="default"
            className="hover:no-underline hover:text-blue-500"
          >
            Socials <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        {/* //mapping starts from here  */}
        <DropdownMenuContent align="end">
          {SocialItems.map((item) => {
            return (
              <DropdownMenuItem
                key={item.id}
                className="group flex items-center"
              >
                <Link
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="space-x-2 flex items-center">
                    {item.icon}
                    <span className="group-hover:text-blue-500">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SocialsDropdown;
