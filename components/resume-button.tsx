import { HiDownload } from "react-icons/hi";
import { Button } from "./ui/button";

const ResumeButton = () => {
  return (
    <main className="">
      <div className="">
        <Button
          className="group rounded-full hover:scale-110 transition-all text-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-neutral-100 mb-32 "
          variant={"default"}
          size={"xl"}
          asChild
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
            <HiDownload className="ml-1 scale-150 opacity-80 group-hover:translate-y-[0.15rem] transition" />
          </a>
        </Button>
      </div>
    </main>
  );
};

export default ResumeButton;
