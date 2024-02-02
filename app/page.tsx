import { SocialItems } from "@/components/ui/dropdown/social-items";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { LiaFileWordSolid } from "react-icons/lia";

export default function Home() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Shivam.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <main className="md:max-w-screen-xl mx-auto px-4">
      <TypewriterEffectSmooth words={words} />
    </main>
  );
}
