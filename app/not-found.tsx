import { Frown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center gap-6 h-screen">
      <Frown className="" />

      <p className="text-xl text-center text-muted-foreground">
        The page you're looking for, seems to be missing.
      </p>

      <Link
        href="/"
        className="inline-flex h-10 text-xl items-center justify-center bg-transparent hover:underline dark:text-yellow-400 text-yellow-600 "
      >
        Go back to home
      </Link>
    </div>
  );
}
