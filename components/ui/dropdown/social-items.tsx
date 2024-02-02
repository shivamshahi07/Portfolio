import {
  BiLogoGithub,
  BiLogoInstagram,
  // BiLogoFacebookSquare,
  BiLogoGmail,
  // BiLogoTelegram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

export const SocialItems = [
  {
    id: 1,
    name: "Github",
    source: "https://github.com/shivamshahi07",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <BiLogoGithub className="text-2xl group-hover:text-blue-500" />,
  },
  {
    id: 2,
    name: "Twitter",
    source: "https://twitter.com/Shivamshahi77",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <BiLogoTwitter className="text-2xl group-hover:text-blue-500" />,
  },
  {
    id: 3,
    name: "Work Mail",
    source: "mailto:shivam.shahi06@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <BiLogoGmail className="text-2xl group-hover:text-blue-500" />,
  },
  {
    id: 4,
    name: "LinkedIn",
    source: "https://www.linkedin.com/in/shivamshahi7/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <BiLogoLinkedin className="text-2xl group-hover:text-blue-500" />,
  },
  {
    id: 5,
    name: "Instagram",
    source: "https://instagram.com/mostlycoffee_",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <BiLogoInstagram className="text-2xl group-hover:text-blue-500" />,
  },
];
