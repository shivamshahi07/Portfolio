import { HiDownload } from "react-icons/hi";
import { Button } from "./ui/button";

const ResumeButton = () => {
  return (
    <main className="">
      <div className="flex w-1/2" >
        <Button
          className=" group "
          variant={"outline"}
          size={"sm"}
          asChild
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
            <HiDownload className="opacity-60 group-hover:translate-y-[0.15rem] transition" />
          </a>
        </Button>
      </div>
    </main>
  );
};

export default ResumeButton;
