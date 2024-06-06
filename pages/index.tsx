import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-[83.5vh] flex  justify-center items-center flex-col gap-5 text-3xl">
      Home Page
    </div>
  );
}
