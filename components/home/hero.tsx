import BackgroundGlow from "./background";

import Image from "next/image";
import App from "../../public/App.png"
import Google from "../../public/Google.png"
import Phone1 from "../../public/phone1.png"
import phone2 from "../../public/phone2.png"
import phone3 from "../../public/phone3.png"

export default function hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <BackgroundGlow />

            <div className="relative z-10 flex flex-col items-center space-y-15 pt-20 justify-center">
                <div className="flex flex-col justify-center space-y-2 place-items-center text-center items-center">
                    <h1 className="font-bold text-4xl">Revolutionizing the Future of Agriculture <br /> and Finance in Africa with AfriKabal</h1>
                    <p className="lg:max-w-160 max-w-80.5 ">Discover ultimate convenience with Afrikabal: your all-in-one solution for financial and agricultural needs. Send money, explore fresh farm produce, and support local communities seamlessly.</p>
                </div>
                <div className="flex gap-5">
                    <Image src={App} alt="App" width={200} height={200} className="w-30 h-10" />
                    <Image src={Google} alt="App" width={200} height={200} className="w-30 h-10" />
                </div>

                <div className="relative mx-auto mt-24 h-162.5 w-225">

                    {/* Left Phone */}
                    <Image
                        src={phone3}
                        alt="Left Phone"
                        width={280}
                        height={560}
                        className="absolute left-12 bottom-0 z-10"
                    />

                    {/* Center Phone */}
                    <Image
                        src="/phone-center.png"
                        alt="Center Phone"
                        width={320}
                        height={640}
                        className="absolute left-1/2 bottom-0 z-20 -translate-x-1/2"
                    />

                    {/* Right Phone */}
                    <Image
                        src="/phone-right.png"
                        alt="Right Phone"
                        width={280}
                        height={560}
                        className="absolute right-12 bottom-0 z-10"
                    />

                </div>

            </div>
        </section>
    )
}
