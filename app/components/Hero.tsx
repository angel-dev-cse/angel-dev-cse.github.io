import { poppinsRegular, poppinsBold } from "../ui/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col p-5">
      <div className="flex items-center justify-center sm:items-start sm:justify-start">
        <Image
          src="/assets/images/white.png"
          height={50}
          width={50}
          alt="White Image"
          className="rounded-full aspect-square object-cover opacity-90 relative"
        />
        <h1
          className={`${poppinsBold.className} absolute text-center text-2xl text-black-100 ml-0 mt-0 sm:ml-2 sm:mt-2`}
        >
          Hi!
        </h1>
      </div>

      <span className="text-sm text-white-200 mt-5">I am</span>

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
      <div className="mt-20">
        <div className="mb-3">
          <span className="text-md text-white-200 mr-3">Full Stack</span>
          <span className="text-5xl font-bold text-white-100">Developer</span>
        </div>

        <div className="mb-3">
          <span className="text-5xl font-bold text-white-100">
            Freelancer
          </span>
        </div>

        <div>
          <span className="text-5xl font-bold text-white-100 mr-3">
            AI
          </span>
          <span className="text-md text-white-200">Enthusiast</span>
        </div>
      </div>
    </div>
  );
}
