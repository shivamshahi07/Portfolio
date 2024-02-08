import first from "@/public/images/first-pr.png";
import Image from "next/image";
import Link from "next/link";
import ShivamAvatar from "@/components/landing/experience/bounty-pr";
import BountyAvatar from "@/components/landing/experience/bounty-pr";
const Exp = () => {
  return (
    <main className="" id="exp">
      <h2 className=" text-teal-500 dark:text-teal-700 w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-12 scroll-mt-20 text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
        My Journey
      </h2>
      <div>
        <div>
          <p>
            My journey has been nothing short of an adventure. Here&#39;s a glimpse
            of my development journey:
          </p>

          <h1 className="text-3xl text-blue-600 dark:text-indigo-500 mt-12 mb-12 ">
            Embracing the Open Source Community (Year 2023 - Present)
          </h1>

          <div>
            <li className="">
              My journey began with a deep dive into the world of open source.As
              everyone I was also attracted to making my first contribution in a
              README.md file but my college room mate stopped me from making
              such contributions and I am very thankful that he did.
            </li>
            <li>
              After learning Some New Skills.I found myself drawn to projects
              like the{" "}
              <span className="text-blue-600">
                <Link
                  href={"https://app.100xdevs.com/"}
                  className="text-underline"
                >
                  100xdevs
                </Link>
              </span>{" "}
              Organisation, where I made meaningful contributions that not only
              enriched my coding skills but also connected me with a vibrant
              global community.
            </li>
            <li>
              I still remember the day my first{" "}
              <span className="text-purple-600 font-semibold">
                PR got merged.
              </span>{" "}
              That easily Comes up into my top ten happiest moments
              <span id="img">
                <Image
                  src={first}
                  width={360}
                  height={300}
                  alt="first PR"
                  className="rounded-lg hover:scale-110 transition-all duration-300 shadow-lg"
                />
              </span>
            </li>
            <div className="flex">
              <li className="flex-grow ">
                I truly realised my potential when the owner of the organisation
                appreciated my contributions with a{" "}
                <span className="text-purple-600 font-semibold">
                  bounty of $5{" "}
                </span>
                it was the just the push i needed to know that i chose the right
                path. it could not have come at a better time .
              </li>

              <BountyAvatar onDesktop={true} />

              {/* <Image
                src={bounty}
                width={500}
                height={360}
                alt="Bounty PR"
                className="flex-grow rounded-xl hover:scale-125 transition-all duration-400 shadow-lg  "
              /> */}
            </div>
          </div>
          <div className="mt-12">
            <BountyAvatar onDesktop={false} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Exp;
