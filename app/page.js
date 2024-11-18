import React from "react";
import Head from 'next/head';
const data = [
  { name: "skyscapers", tagline: "In a world full of noise, AlpineLicht is the quiet strength that speaks for you." },
  { name: "soria", tagline: "Our clothes aren’t just fabric—they’re a reflection of who you are, a bold expression of your journey." },
  { name: "outward_block", tagline: "For the dreamers, the rebels, and the explorers, AlpineLicht is more than fashion." },
  { name: "outward_round", tagline: "It’s a symbol of self-discovery, a celebration of the light within." },
  { name: "outward_borders", tagline: "You’re not just following trends—you’re making them." },
  { name: "nighty", tagline: "With AlpineLicht, stand out, shine brighter, and wear the confidence that comes from being unapologetically you." },
  { name: "prociono", tagline: "Alpinelicht – Explore. Conquer. Express." }
];



export default function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>AlpineLicht – Premium Clothing for the Modern Youth</title>
        <meta name="description" content="Discover AlpineLicht, a premium clothing brand blending style, comfort, and quality for todays ambitious youth. Explore timeless pieces designed to elevate your look." />
        <meta name="keywords" content="premium clothing, men's fashion, women's fashion, modern youth fashion, stylish clothing, luxury apparel" />
        <meta property="og:title" content="AlpineLicht – Premium Clothing for the Modern Youth" />
        <meta property="og:description" content="Explore AlpineLicht’s bold, timeless fashion collections crafted for the modern youth. Elevate your style with luxury apparel." />
        <meta property="og:image" content="https://www.alpinelicht.com/og-image.jpg" />
        <meta property="og:url" content="https://www.alpinelicht.com" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory transition-all ease-in-out ">

        <div className={`  h-screen flex items-center justify-center font-prociono text-[#161616] bg-[#fff7e9] snap-start`}>
          <div className=" h-full w-11/12  grid grid-cols-1 grid-rows-3  tracking-widest">
            <div className="py-12 flex items-start justify-end ">
            </div>

            <div className="flex items-center justify-center ">
              <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl  font-Lamiran hover:font-nighty">AlpineLicht</h1>
            </div>

            <div className="flex items-center justify-center ">
              <h1 className="text-xl font-soria">Alpinelicht</h1>
            </div>
          </div>
        </div>

        {data.map((item, index) => (
          <section key={index} className={`  h-screen flex items-center justify-center font-prociono  ${index % 2 === 0 ? 'bg-[#161616] text-[#fff7e9]' : 'text-[#161616] bg-[#fff7e9]'} snap-start`}>
            <div className=" h-full w-11/12  grid grid-cols-1 grid-rows-3  tracking-widest ">
              <div className="py-12 flex items-start justify-end sticky top-0">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-Lamiran">AlpineLicht</h1>
              </div>

              <div className="flex items-center justify-center px-2">
                <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl  text-center tracking-wide leading-relaxed ">
                  {item.tagline}
                </h1>
              </div>

              <div className="flex items-center justify-center flex-col sticky bottom-0">
                <h1 className="text-4xl font-soria origin-bottom -rotate-12">{index + 1}</h1>
                <h1 className="text-xl font-soria mt-6">Alpinelicht</h1>
              </div>
            </div>
          </section>
        ))}

        <div className={`  h-screen flex items-center justify-center font-prociono text-[#161616] bg-[#fff7e9] snap-start`}>
          <div className=" h-full w-11/12  grid grid-cols-1 grid-rows-3  tracking-widest">
            <div className="py-12 flex items-start justify-end ">
            </div>

            <div className="flex items-center justify-center ">
              <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl  text-center font-Lamiran hover:font-soria">Launching Soon!</h1>
            </div>

            <div className="flex items-center justify-center ">
              <h1 className="text-xl font-soria">Team Alpinelicht.</h1>
            </div>
          </div>
        </div>



      </div>
    </React.Fragment>
  );
}
