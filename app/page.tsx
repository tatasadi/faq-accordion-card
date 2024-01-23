import Image from "next/image"
import Reference from "./components/Reference"
import illustrationBox from "@/public/images/illustration-box-desktop.svg"
import illustrationWomanDesktop from "@/public/images/illustration-woman-online-desktop.svg"
import illustrationWomanMobile from "@/public/images/illustration-woman-online-mobile.svg"
import patternDesktop from "@/public/images/bg-pattern-desktop.svg"
import patternMobile from "@/public/images/bg-pattern-mobile.svg"

export default function Home() {
  return (
    <main className="relative flex h-full min-h-screen w-full max-w-3xl flex-col items-center px-6 py-10 lg:min-h-0 lg:px-8">
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
        <div className="p-6">
          <h1 className="text-center text-[2rem] font-bold leading-normal">
            FAQ
          </h1>
        </div>
      </div>
      <Reference />
    </main>
  )
}
