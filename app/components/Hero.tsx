import { poppinsRegular, poppinsBold } from "../ui/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col p-5 relative">
      <div className="flex items-center justify-center sm:items-start sm:justify-start">
        <Image
          src="/assets/images/white.png"
          height={80}
          width={80}
          alt="White Image"
          className="rounded-full aspect-square object-cover opacity-90 relative"
        />
        <h1
          className={`${poppinsBold.className} absolute text-center text-4xl text-black-100 ml-0 mt-0 sm:ml-4 sm:mt-5`}
        >
          Hi!
        </h1>
      </div>

      <span className="text-sm text-white-200 mt-10">I am</span>

      <div className="align-middle">
        <span className="relative text-3xl mr-2">Angel Sharma</span>
        <Image
          src="/assets/images/terminal.gif"
          height={30}
          width={30}
          alt="White Image"
          className="absolute inline-flex"
        />
      </div>
      <div className="mt-16 sm:mt-25">
        <div className="mb-3">
          {/* <span className="text-md text-white-200 mr-3">Full Stack</span> */}
          <span className="text-5xl font-extrabold text-white-100">
            Full Stack Developer
          </span>
        </div>

        {/* 
        <div className="mb-3">
          <span className="text-4xl text-white-100 mr-3">AI Enthusiast</span>
          <span className="text-md text-white-200"></span>
        </div> */}

        {/* <div>
          <span className="text-4xl text-white-100">Freelancer</span>
        </div> */}
        <div className="max-w-[30em] text-balance text-white-100 mt-3">
          Delivering complete software solutions to tackle real life challenges,
          designing innovative user experience, aspiring to learn new
          technlogies.
        </div>
      </div>
      <div className="hidden flex justify-end mt-[-6em] sm:mt-[-16em]">
        <Image
          src="/assets/images/avatar.png"
          width={200}
          height={500}
          alt="White Image"
          className="ml-10 opacity-5"
        />
      </div>

      <div className="absolute top-5 left-[45em] w-full h-full pointer-events-none justify-center">
        <Image
          src="/assets/svg/computer.svg"
          width={400}
          height={400}
          alt="Computer SVG"
          className="ml-10"
        />
      </div>
    </div>
  );
}
