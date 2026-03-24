import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { CARDS } from "@/data/data";
import { useRef, useState } from "react";
import CarouselControls from "./highlight/CarouselControls";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const controlsRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setPlaying] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const card = container.querySelector('div') as HTMLElement;

        if (card) {
            const cardWidth = card.offsetWidth + 20;

            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    }

    const scrollToId = (index: number) => {
        const container = scrollRef.current;
        if (!container) return;

        const firstCard = container.querySelector('div') as HTMLElement;

        if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 20;
            container.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth',
            });
        }
    }

    useGSAP(() => {
        ScrollTrigger.create({
        trigger: '#highlight',
        start: 'top bottom-=100',
        end: 'bottom bottom-=100',
        pin: controlsRef.current,
        pinSpacing: false
       });
    }, { dependencies: [], scope: scrollRef });

    return (
        <section id="highlight" className="w-screen bg-[#1D1D1F] relative z-2 overflow-x-hidden pb-20">
            <div>
                <div className="hidden">zovzovsvoooooo goidagoida ticho smotrish</div>
                <div className="flex justify-between py-10 px-20">
                    <p className="md:text-4xl text-2xl font-bold">Get the highlighs</p>
                    <a className="flex items-center text-blue-500" href="/" target="_blank">
                        <p>Watch the film</p>
                        <PlayCircle className="scale-80" />
                    </a>
                </div>

                <div ref={scrollRef} onScroll={handleScroll} className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-pl-20 px-20">
                    {CARDS.map((card) => (
                        <div key={card.id} className="relative flex flex-col min-w-[85vw] h-125 md:h-150 bg-black overflow-hidden rounded-4xl snap-start">
                            <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-start">
                                <p className={`font-semibold ${card.textCol} md:text-xl text-xl max-w-[80%] leading-tight`}>
                                    {card.title}
                                </p>
                            </div>
                            <div className="absolute inset-0 z-10 md:block hidden">
                                <Image 
                                    src={card.image} 
                                    alt="Highlight" 
                                    fill 
                                    className={card.imgClass} 
                                    priority={card.id <= 2} // ускоряет загрузку первых слайдов
                                />
                            </div>
                            <div className="absolute inset-0 z-10 block md:hidden">
                                <Image 
                                    src={card.imageMin} 
                                    alt="Highlight" 
                                    fill 
                                    className={card.imgClass}
                                />
                            </div>

                            {/* <p className={`absolute top-0 left-0 md:w-[50%] font-semibold ${card.textCol} md:text-2xl text-md p-5`}>{card.title}</p>
                            <Image className="object-cover md:block hidden" src={card.image} alt="Highlight" width={800} height={800} />
                            <Image className="object-cover block md:hidden" src={card.imageMin} alt="Highlight" width={800} height={800} /> */}
                        </div>
                    ))}
                </div>
            </div>
            <div id="BUTTON" ref={controlsRef} className="absolute top-0 w-screen flex items-center justify-center z-10">
                <CarouselControls isPlaying={isPlaying} activeIndex={activeIndex} scrollToId={scrollToId} />
            </div>
        </section>
    );
}