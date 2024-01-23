import Image from "next/image"
import Reference from "./components/Reference"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-3xl flex-col items-center lg:min-h-0 lg:px-8 lg:pt-32">
      <h1>Hello World!</h1>
      <Reference />
    </main>
  )
}
