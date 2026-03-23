import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Highlights() {
    return (
        <section className="w-screen px-20 bg-[#1D1D1F]">
            <div className="flex justify-between py-10">
                <p className="text-4xl font-bold">Get the highlighs</p>
                <a className="flex items-center text-blue-500" href="/" target="_blank">
                    <p>Watch the film</p>
                    <PlayCircle className="scale-80" />
                </a>
            </div>
            
            <div className="relative flex flex-col justify-center p-10 bg-black rounded-4xl">
                <p className="absolute top-0 left-0 w-[50%] font-semibold text-2xl p-5">M5, M5 Pro, and M5 Max. One big, powerful family.</p>
                <Image className="object-contain" src='/images/HighlightChips.png' alt="Chips" width={800} height={800} />
            </div>
        </section>
    );
}