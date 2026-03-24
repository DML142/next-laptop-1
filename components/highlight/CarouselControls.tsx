import { Play, Pause } from "lucide-react"
import { CARDS } from '@/data/data'

export default function CarouselControls({ isPlaying, activeIndex, scrollToId }: {isPlaying: boolean, activeIndex: number, scrollToId: (index: number) => void}) {
    return (
        <div className="flex items-center gap-4 mt-10 z-10">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#424245]/70 backdrop-blur-xl rounded-full">
                {CARDS.map((card, i) => (
                    <div 
                        key={card.id}
                        onClick={() => scrollToId(card.id - 1)}
                        className={`h-2 rounded-full transition-all duration-500 ease-out 
                            ${i === activeIndex ? 'w-10 bg-[#F5F5F7]' : 'w-2 bg-[#86868b]'}`}
                    />
                ))}
            </div>

            <button className="flex items-center justify-center w-11 h-11 bg-[#424245]/70 backdrop-blur-xl rounded-full transition-hover hover:bg-[#515154]">
                {isPlaying ? (
                    <Pause size={18} fill="white" className="text-white" />
                ) : (
                    <Play size={18} fill="white" className="text-white" />
                )}
            </button>
        </div>
    )
}