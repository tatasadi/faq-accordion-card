import Image from "next/image"
import Reference from "./components/Reference"
import illustrationBox from "@/public/images/illustration-box-desktop.svg"
import illustrationWomanDesktop from "@/public/images/illustration-woman-online-desktop.svg"
import illustrationWomanMobile from "@/public/images/illustration-woman-online-mobile.svg"
import patternDesktop from "@/public/images/bg-pattern-desktop.svg"
import patternMobile from "@/public/images/bg-pattern-mobile.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Key } from "lucide-react"

const questions = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
]

export default function Home() {
  return (
    <main className="relative flex h-full min-h-screen w-full max-w-5xl flex-col items-center px-6 py-10 md:px-16 lg:min-h-0">
      <div className="mt-40 flex w-full min-w-80 flex-col items-center rounded-[1.4375rem] bg-white shadow-[0_50px_50px_-20px_rgba(53,18,122,0.50)] md:flex-row">
        <div className="relative md:hidden">
          <Image
            src={illustrationWomanMobile}
            alt="illustration woman online"
            className="absolute left-0 top-0 -mt-[6.5rem]"
          />
          <Image src={patternMobile} alt="background pattern" />
        </div>
        <div className="relative hidden w-[30rem] md:block">
          <div className="relative overflow-hidden">
            <Image
              src={patternDesktop}
              alt="background pattern"
              className="relative -left-[8rem]"
            />
          </div>
          <Image
            src={illustrationBox}
            alt="illustration box"
            className="absolute -left-[5.75rem] top-[10rem] z-10"
          />
          <div className="absolute left-0 top-[4rem] overflow-hidden">
            <Image
              src={illustrationWomanDesktop}
              alt="illustration woman online"
              className="-ml-[4rem]"
            />
          </div>
        </div>
        <div className="w-full p-6 sm:px-10 sm:pb-10 md:w-2/3 md:pl-0 lg:w-1/2">
          <h1 className="mb-[2.38rem] text-center text-[2rem] font-bold leading-normal md:text-left">
            FAQ
          </h1>
          <Accordion type="single" collapsible className="w-full">
            {questions.map(({ question, answer }, index) => (
              <AccordionItem value={`item-${index}`} key={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Reference />
    </main>
  )
}
