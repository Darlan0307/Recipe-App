import Link from "next/link";
import Image from "next/image";
import conection from "../../public/conection1.jpg"; // Importação da imagem
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="text-black min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 p-8 flex flex-col items-center">
        <div className="mt-11 max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={conection} // Usando o componente Image do Next.js
                alt="Connection"
                layout="fill" // Preenche o contêiner
                objectFit="cover" // Cobre o contêiner mantendo a proporção
                className="rounded-lg"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)", // Ajuste o clipPath para criar bordas irregulares
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              Welcome to Our Recipe Platform
            </h1>
            <p className="text-base md:text-lg mb-6 text-gray-700">
              We’re Thays and Darlan, and we’re excited to introduce you to our
              cutting-edge recipe platform. Our aim is to provide a sleek,
              intuitive space where you can discover, save, and share your
              favorite recipes effortlessly.
            </p>
            <p className="text-base md:text-lg mb-6 text-gray-700">
              Dive into our platform to explore new recipes, save your
              favorites, and connect with other culinary enthusiasts via our
              integrated chat feature.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-6 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-base mb-6 text-gray-700">
              Interested in learning more or collaborating with us? Don’t
              hesitate to reach out!
            </p>
            <div className="flex flex-col items-center">
              <Link href="https://thaysribeiromaher.netlify.app/">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out mb-4">
                  Thays's GitHub
                </Button>
              </Link>
              <Link href="https://projecthubdarlan.netlify.app/">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out">
                  Darlan's GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
