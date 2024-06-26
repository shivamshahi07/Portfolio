import Link from "next/link";
import Shivam from "../shivam_avatar";

const AboutMe = () => {
  return (
    <main className="">
      <h1
        className=" w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-20  scroll-mt-20 text-3xl md:text-4xl font-semibold mb-4 md:mb-4"
        id="about"
      >
        About Me🧑🏻‍🔧
      </h1>
      <div className="flex ">
        <div className="flex-grow ">
          <p className="text-lg text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-14 mt-20  md:mb-4">
            Hi, my name is Shivam and I am a highly ambitious, self-motivated
            and driven Software Engineer .
          </p>
          <p className="text-lg text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-14 mt-10  md:mb-4">
            I am passionate about creating not just functional, but also
            aesthetically pleasing and intuitive user interfaces, ensuring a
            seamless user experience.
          </p>
          <p className="text-lg  text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-14 mt-10  md:mb-4">
            I thrive on innovation and creative problem-solving. Whether
            it&#39;s building from scratch or optimizing existing systems, I
            bring a fresh perspective to every project
          </p>
          <p className="text-lg text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-32 mt-8  md:mb-12">
            Beyond coding, you&rsquo;ll find me listening to{" "}
            <Link
              href={"https://open.spotify.com/user/b4p96ia2c1r8gjil2h2rqo7wi"}
              className="text-green-400 underline-offset-1 hover:underline"
            >
              music🎵
            </Link>{" "}
            or playing Soccer ⚽️, which adds a touch of balance and inspiration
            to my life outside of programming.
          </p>
        </div>
        <div className="flex-grow mt-10  ">
          <Shivam onDesktop={true} />
        </div>
      </div>
      <Shivam onDesktop={false} />
    </main>
  );
};

export default AboutMe;
