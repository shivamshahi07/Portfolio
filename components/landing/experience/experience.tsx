// @ts-nocheck
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, BookOpen, Briefcase, Calendar, MapPin } from 'lucide-react';


import first from "@/public/images/first-pr.png";
import bounty from "@/public/images/bounty-pr.png";
//@ts-ignore

const ExperienceCard = ({ title, company, date, location, description, isRemote }) => (
  <Card className="mb-6 bg-transparent">
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span>{title}</span>
        <Badge variant="outline">{company}</Badge>
      </CardTitle>
      <div className="text-sm text-muted-foreground flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
        <MapPin className="h-4 w-4 ml-2" />
        <span>{location}</span>
        {isRemote && <Badge variant="secondary">Remote</Badge>}
      </div>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Exp = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "CognoTools",
      date: "October 2024 - Present",
      location: "Bengaluru, IND",
      isRemote: true,
      description: [
        "Working with Google engineers to Implement a microphone-based UI for an AI resume builder, increasing engagement by 40%",
        "Working extensively with LangChain and LangGraph to build AI agents, leading to a 30% efficiency improvement in response generation and API call processing",
        "Managing virtual machines on Microsoft Azure, improving workflow productivity by 20%.",
        "Resolving merge conflicts and streamlined the development process, decreasing project delivery time by 30%" 
      ]
    },
    {
      title: " Software Engineer Intern",
      company: "Smertix",
      date: "April 2024 - Present",
      location: "New Delhi, IND",
      isRemote: true,
      description: [
        "Engineered and implemented robust GraphQL API integrations for all their management systems leveraging Apollo Client and Hasura platform, resulting in a 30% improvement in data retrieval efficiency",
        "Developed responsive and interactive user interfaces using Next.js, Chakra UI, and Framer Motion, creating complex forms with seamless database integration through optimized GraphQL queries",
        "Collaborated with senior engineers to optimize query performance, resulting in a 15% boost in overall team productivity and a 25% reduction in application response time by implementing best practices"
      ]
    },
    {
      title: "Lead Front-end Engineer",
      company: "WebSmiths",
      date: "November 2023 - February 2024",
      location: "New Delhi, IND",
      isRemote: true,
      description: [
        "Spearheaded a team of Front-end Developers to develop a new website for our flagship product, resulting in a 150% increase in user engagement",
        "Worked closely with Co-Founders to translate business requirements into technical specifications, ensuring alignment between development efforts and product objectives"
      ]
    },
    {
      title: "Open-Source Contributor",
      company: "Commercial Open Source Software",
      date: "October 2023 - Present",
      location: "New Delhi, IND",
      isRemote: true,
      description: [
        "Actively contributed to the company's open-source projects by submitting bug fixes, feature enhancements, and won 5 dollars in bounties",
        "Founded CS Foundation101: A Repository for Computer Science Beginners with Resources to Ensure a Smooth Coding Journey, leading to 60% increase in awareness about Computer Science"
      ]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 scroll-mt-28 " id="exp"   >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-600 dark:text-teal-400 " >
        My Journey 🚀
      </h2>
      
      <div className="space-y-8 text-neutral-800 dark:text-neutral-300">
        <p className="text-lg text-center">
          My journey has been nothing short of an adventure. Here&apos;s a glimpse of my development journey:
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 dark:text-indigo-400 mt-12 mb-6">
          Embracing the Open Source Community (Year 2023 - Present)
        </h3>

        <div className="space-y-6">
          <p>
            My journey began with a deep dive into the world of open source. Unlike many, I was guided away from making simple README.md contributions, thanks to my college roommate&apos;s advice – a decision I&apos;m deeply grateful for.
          </p>
          
          <p>
            After honing my skills, I found myself drawn to projects like the{" "}
            <Link href="https://app.100xdevs.com/" className="text-blue-600 hover:underline">
              100xdevs
            </Link>{" "}
            Organization, where I made meaningful contributions that not only enriched my coding skills but also connected me with a vibrant global community.
          </p>

          <Card className="overflow-hidden bg-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-purple-600" />
                First PR Merged
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I still remember the day my first PR got merged. That easily comes up into my top ten happiest moments.
              </p>
              <Image
                src={first}
                alt="First PR"
                className="rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-700"
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-purple-600" />
                First Bounty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I truly realized my potential when the owner of the organization appreciated my contributions with a bounty of $5. It was just the push I needed to know that I chose the right path.
              </p>
              <Image
                src={bounty}
                alt="Bounty PR"
                className="rounded-lg shadow-lg w-full"
              />
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-blue-600 dark:text-indigo-400 mt-12 mb-6">
          Professional Experience
        </h3>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}

       
      </div>
    </main>
  );
};

export default Exp;