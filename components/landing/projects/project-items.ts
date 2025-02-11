import img from "@/public/images/shlipkart.png";
import portfolio from "@/public/images/portfolio.png";
import web from "@/public/images/web.png";
import pre from "@/public/images/pre.png";
import ai from "@/public/images/ai.png"
import kanban from "@/public/images/kanban.png";
export const projectitems = [
  {
    id: 1,
    name: "Ai Symphony",
    image: ai,
    description:
      "A platform which provides tools like image generation , summarization and more using open source ai models ",
    demolink: "https://aisymphony.vercel.app/",
    github: "https://github.com/shivamshahi07/aisymphony",
    skills: [
      "Typescript",
      "Tailwind CSS",
      "Next Js",
      "Cloudflare Workers",
      "Hono.js",
      "Zod",
      "Bun",
      "Shadcn UI"
    ],
  },
  {
    id: 2,
    name: "Prototype YC landing page for Preloop",
    image: pre,
    description: "This website was my attempt to make a protoype marketing page for a recently funded(w24) YC startup, Preloop",
    demolink: "https://preloop.vercel.app/",
    github: "https://github.com/shivamshahi07/Preloop",
    skills: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Resend(Email)",
      "Typescript",
      "Shadcn UI",
    ],
  },
  {
    id: 3,
    name: "Shlipkart",
    image: img,
    description:
      "An E-Commerce App built with google authentication where users can add and remove items from their shopping carts ",
    demolink: "https://shlipkart-shivam-shahis-projects.vercel.app/",
    github: "https://github.com/shivamshahi07/Shlipkart",
    skills: [
      "Typescript",
      "Tailwind CSS",
      "Next Js",
      "Prisma",
      "Zod",
      "MongoDB",
      "Daisy UI",
    ],
  },
  {
    id: 4,
    name: "Kanban Board Application",
    image: kanban,
    description:
      "A Kanban Board Application built with React and Redux for managing tasks and workflows",
    demolink: "https://kanban-board-mu-seven.vercel.app/",
    github: "https://github.com/shivamshahi07/kanban-board-2",
    skills: [
      "React ",
      "Typescript",
      "Prisma ",
      "MongoDB",
      "dnd-kit",
      "Redux",
      "Shadcn UI",
      "radix",
    ],
  },
  {
    id: 5,
    name: "WebSmiths Landing Page",
    image: web,
    description:
      "Implemented the Landing Page for a website development agency for small business owners",
    demolink: "https://websmiths.vercel.app",
    github: "https://github.com/shivamshahi07/WebSmiths",
    skills: [
      "Typescript",
      "Tailwind CSS",
      "Next Js",
      "Framer Motion",
      "Shadcn UI",
      "radix",
    ],
  },
  {
    id: 6,
    name: " Portfolio Website ",
    image: portfolio,
    description:
      "The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience.",
    demolink: "https://shivamshahi.vercel.app",
    github: "https://github.com/shivamshahi07/Portfolio",
    skills: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Resend(Email)",
      "Typescript",
      "Shadcn UI",
    ],
  },
] as const;
