import { motion } from "framer-motion";
import img from "@/public/images/shivam.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Shivam = ({ onDesktop = true }: { onDesktop?: boolean }) => {
  return (
    <motion.div
      className={cn(
        "w-full items-center justify-center col-span-2",
        onDesktop ? "md:flex hidden mt-10 " : "flex md:hidden mb-4 -mt-4"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Image
        src={img}
        alt={"Bounty pr"}
        className="rounded-full shadow-xl hover:scale-125  transition-all duration-300"
        width={onDesktop ? 360 : 240}
        height={onDesktop ? 360 : 240}
      />
    </motion.div>
  );
};

export default Shivam;
