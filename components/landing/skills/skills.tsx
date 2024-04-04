import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import reactIcon from "@/public/images/skills/react.png";
import nextjsIcon from "@/public/images/skills/next-js.png";
import vueIcon from "@/public/images/skills/vue.png";
import typescriptIcon from "@/public/images/skills/typescript.png";
import javascriptIcon from "@/public/images/skills/javascript.png";
import pythonIcon from "@/public/images/skills/python.png";
import javaIcon from "@/public/images/skills/java.png";
import html5Icon from "@/public/images/skills/html5.png";
import tailwindcssIcon from "@/public/images/skills/tailwindcss.png";
import shadcnuiIcon from "@/public/images/skills/shadcn-ui.png";
import pnpmIcon from "@/public/images/skills/pnpm.png";
import viteIcon from "@/public/images/skills/vite.png";
import prettierIcon from "@/public/images/skills/prettier.png";
import nodejsIcon from "@/public/images/skills/nodejs.png";
import nestjsIcon from "@/public/images/skills/nest-js.png";
import expressjsIcon from "@/public/images/skills/express-js.png";
import prismaIcon from "@/public/images/skills/prisma.png";
import postgresIcon from "@/public/images/skills/postgres.png";
import dockerIcon from "@/public/images/skills/docker.png";
import gitIcon from "@/public/images/skills/git.png";
import ubuntuIcon from "@/public/images/skills/ubuntu.svg";
import vscodeIcon from "@/public/images/skills/vscode.png";
import arcIcon from "@/public/images/skills/arc.png";
import warpIcon from "@/public/images/skills/warp.webp";
import postmanIcon from "@/public/images/skills/postman.svg";
import davinciResolveIcon from "@/public/images/skills/davinci-resolve.png";
import lightroomIcon from "@/public/images/skills/lightroom.png";
import githubActionsIcon from "@/public/images/skills/github-actions.png";
import trpcIcon from "@/public/images/skills/trpc.svg";
import nextdarkicon from "@/public/images/skills/nextdarkicon.png";
import expressdarkicon from "@/public/images/skills/expressdarkicon.png";
import prismadarkicon from "@/public/images/skills/prismadarkicon.png";
// import {ModeToggle} from "@/components/ui/theme-toggler.tsx"
// const iconFilename =  ? 'dark_icon.png' : 'light_icon.png';

export default function Skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js", //needs dark mode icon
          icon: nextjsIcon,
          // darkicon: nextdarkicon,
        },
        {
          name: "Vue.js",
          icon: vueIcon,
        },
        {
          name: "tRPC",
          icon: trpcIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
        },
        {
          name: "Vite",
          icon: viteIcon,
        },
        {
          name: "Prettier",
          icon: prettierIcon,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Express.js", //needs dark mode pic
          icon: expressjsIcon,
          // darkicon: expressdarkicon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "Prisma ORM", //needs dark mode pic
          icon: prismaIcon,
          // darkicon: prismadarkicon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "Ubuntu",
          icon: ubuntuIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "Arc",
          icon: arcIcon,
        },
        {
          name: "Warp Terminal",
          icon: warpIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
      ],
    },
    {
      title: "Visual",
      skills: [
        {
          name: "DaVinci Resolve",
          icon: davinciResolveIcon,
        },
        {
          name: "Lightroom",
          icon: lightroomIcon,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h1 className="w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-20  scroll-mt-20 text-3xl md:text-4xl font-semibold mb-4 md:mb-4 ">
          My Skills 🛠️
        </h1>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
