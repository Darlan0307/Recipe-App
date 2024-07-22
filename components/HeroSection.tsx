// components/HeroSection.tsx
import Image from "next/image";
import iconAbove from "@/public/hat.png";
import iconBelow from "@/public/rail.png";

function HeroSection() {
  return (
    <div className="barlow-semi-condensed-black-italic w-[100%] h-[100vh] flex flex-col align-center justify-space-around transition duration-500 hero-container min-h-screen relative">
      <video
        src="videoback.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full absolute inset-0 object-cover"
      />
      <div className="overlay h-[100%] w-[100%] absolute inset-0 bg-black opacity-50" />

      <div className="mt-[-50px] content absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
        <div className="mt-[250px] fire">
          <div className="text-white relative">
            <Image
              src={iconAbove}
              alt="Icon Above"
              width={160}
              height={160}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
            />
            <h1 className="text-5xl md:text-8xl barlow-semi-condensed-black-italic font-bold mb-4 relative z-10 Blazing">
              SAVORS
            </h1>
            <p className="text-lg md:text-xl dancing-script-chefathome">
              Chef at Home
            </p>
            <Image
              src={iconBelow}
              alt="Icon Below"
              width={80}
              height={80}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
            />
          </div>
        </div>

        <div className="w-[8em] h-[3em] mt-[100%] p-2 font-semibold rounded-3xl ml-[25%] flex justify-center z-1 border-solid border-2 bg-white md:ml-[37%] md:mt-[50%] cursor-pointer shadow-md hover:bg-gray-100 text-black">
          Learn More
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
