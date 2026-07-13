import BackgroundGlow from "./background";

export default function hero() {
  return (
<section className="relative overflow-hidden h-screen bg-white">
    <BackgroundGlow />

    <div className="relative z-10  py-10">
        <div className="flex flex-col justify-center place-items-center items-center">
            <h1 className="font-bold text-2xl">Revolutionizing the Future of Agriculture <br /> and Finance in Africa with AfriKabal</h1>
            <p>Discover ultimate convenience with Afrikabal: your all-in-one solution for financial and agricultural needs. Send money, explore fresh farm produce, and support local communities seamlessly.</p>

        </div>
    </div>
</section>
)}
