import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
    return (
        <section className="md:h-screen w-screen md:px-20 lg:px-30">
            <div className="flex flex-col justify-between">
                <div className="flex w-full justify-center items-center">
                    <Image width={800} height={800} className=" pb-20 py-40 object-contain md:min-h-140 md:w-250 w-150 md:max-h-[75vh] min-h-150 max-h-150" src='/images/LaptopWelcome.png' alt="DML LP Pro" />
                </div>
                <div className="md:text-left text-center">
                    <h1 className="inline-block font-bold md:text-2xl text-xl">DML LB (Larp Book) Pro</h1>
                    <p className="inline-block pl-2 text-gray-500">*Yes, its author rights</p>
                    <p className="font-bold md:text-5xl text-3xl bg-linear-to-r from-[#d8f1e0] to-[#3e5c7a] bg-clip-text text-transparent pb-2">Best choice for every task</p>
                    <p className="font-bold md:text-2xl text-xl">Intel i9 14Gen and RTX 4090 Now</p>

                    <div className="bg-white/20 md:flex hidden items-center gap-3 w-fit py-2 px-4 rounded-full mt-5 leading-tight text-sm font-bold">
                        <div className="flex flex-col mr-3">
                            <p className="flex">From $1699</p>
                            <p className="flex">or $141.58/mo. for 12 mo.<i>*</i></p>
                        </div>
                        <Link href='/' className="bg-blue-500 rounded-full py-2 px-4">Buy</Link>
                    </div>
                    <div className="bg-white/20 flex justify-around md:hidden w-screen items-center gap-3 py-2 px-4 mt-5 leading-tight text-sm font-bold">
                        <div className="flex flex-col mr-3">
                            <p className="flex">From $1699</p>
                            <p className="flex">or $141.58/mo. for 12 mo.<i>*</i></p>
                        </div>
                        <Link href='/' className="bg-blue-500 rounded-full py-2 px-4">Buy</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}