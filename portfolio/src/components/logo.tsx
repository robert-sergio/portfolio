import Image from "next/image";

export default function Logo(){
    return(
        <div className="flex flex-col p-4">
            <div className="relative border-2 bg-gradient-to-r from-red-900 to-red-700 border-orange-900 rounded h-24 w-24 flex justify-center items-center shadow-cyan-500/50">
                <div className="border-4 border-orange-500 rounded-full h-16 w-16">
                    <span className="absolute top-0 left-3 text-xl font-black text-amber-300 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)]">
                        Dr.
                    </span>
                    <span className={`absolute top-3 left-5 text-7xl font-bold
                        text-amber-300 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)]`}>
                        R
                    </span>
                    <span className="h-2 w-2 absolute rounded-full bg-orange-500 bottom-1 left-2 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)]"></span>
                    <span className="h-2 w-2 absolute rounded-full bg-orange-500 bottom-1 right-2 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)]"></span>
                </div>
            </div>

            <Image src='/robotnik_transparent.png' alt='' width={100} height={100}></Image>
            <Image src='/robotnik2_transparent.png' alt='' width={100} height={100}></Image>
        </div>
    )
}