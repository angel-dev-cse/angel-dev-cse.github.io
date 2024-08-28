import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-0 sm:px-20"
      style={{
        backgroundImage: "url('/assets/images/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "top",
        minHeight: "100%",
        height: "90vh",
      }}
    >
      <div className="max-w-full w-full">
        <Hero />
      </div>
    </main>
  );
}