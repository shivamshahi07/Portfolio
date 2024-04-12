import { motion } from "framer-motion";
import bounty from "@/public/images/bounty-pr.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BountyAvatar = ({ onDesktop = true }: { onDesktop?: boolean }) => {
  return (
    <motion.div
      className={cn(
        "w-full items-center justify-center col-span-2 ",
        onDesktop ? "md:flex hidden" : "flex md:hidden mb-2 -mt-4"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Image
        src={bounty}
        alt={"Bounty PULL REQUEST"}
        className="rounded-full shadow-xl hover:scale-150 transition-all duration-300"
        width={onDesktop ? 400 : 400}
        height={onDesktop ? 400 : 400}
      />
    </motion.div>
  );
};

export default BountyAvatar;
