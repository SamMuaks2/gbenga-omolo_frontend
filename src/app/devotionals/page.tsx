"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Devotional = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
};

const devotionals: Devotional[] = [
 
  {
      id: "prodigal-god",
      title: "The Prodigal God",
      image: "/Images/book1.png",
      description: "A powerful devotional on grace.",
      content: "Full devotional content goes here..."
    },
    {
      id: "counterfeit-gods",
      title: "Counterfeit Gods",
      image: "/Images/book2.png",
      description: "Understanding modern idols.",
      content: "Full devotional content goes here..."
    },
    {
      id: "generous-justice",
      title: "Generous Justice",
      image: "/Images/book3.png",
      description: "Faith and social justice.",
      content: "Full devotional content goes here..."
    },
    {
      id: "generous-justice-2",
      title: "Generous Justice 2",
      image: "/Images/book4.png",
      description: "Faith and social justice continued.",
      content: "Full devotional content goes here..."
    },
];

export default function DevotionalsPage() {
  // const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   fetch("/api/devotionals")
  //     .then((res) => res.json())
  //     .then((data) => setDevotionals(data));
  // }, []);

  // if (!devotionals.length) return null;

  
  // return (
  //   <main className="w-full">
      
  //     ================= HERO SECTION =================
  //     <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
  //       <Image
  //         src="/Images/devotionals-hero.jpg" //Pick a compressed overview of the whole page
  //         alt="Devotionals Banner"
  //         fill
  //         className="object-cover"
  //         priority
  //       />

  //       {/* Overlay */}
  //       <div className="absolute inset-0 bg-black/40" />

  //       {/* Text */}
  //       <div className="relative z-10 text-center text-white">
  //         <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
  //           DEVOTIONALS
  //         </h1>
  //         <p className="mt-2 italic text-lg md:text-xl">
  //           by Gbenga Omole
  //         </p>
  //       </div>
  //     </section>

  //     {/* ================= DEVOTIONAL GRID ================= */}
  //     <section className="bg-white py-20 px-6 md:px-20">
  //       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
  //         {devotionals.map((img, index) => (
  //           <div
  //             key={index}
  //             className="relative w-full aspect-[3/4] shadow-md hover:scale-[1.03] transition-transform duration-300"
  //           >
  //             <Image
  //               src={img}
  //               alt={`Devotional ${index + 1}`}
  //               fill
  //               className="object-cover"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </section>

  //     {/* ================= CALL TO ACTION ================= */}
  //     <section className="bg-[#ECEAE4] py-20 flex justify-center">
  //       <button className="bg-[#397171] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#1e4b4b] transition">
  //         VIEW ALL RESOURCES →
  //       </button>
  //     </section>

  //   </main>
  // );

   return (
    <main className="w-full">

      {/* ================= ACTIVE BANNER SLIDER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src={devotionals[activeIndex].image}
          alt={devotionals[activeIndex].title}
          fill
          className="object-cover opacity-40"
        />

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
            {devotionals[activeIndex].title}
          </h1>
          <p className="mt-3 text-lg opacity-90">
            {devotionals[activeIndex].description}
          </p>
        </div>
      </section>

      {/* ================= DEVOTIONAL GRID ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {devotionals.map((item, index) => (
            <Link
              key={item.id}
              href={`/devotionals/${item.id}`}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative w-full aspect-[3/4] shadow-md hover:scale-105 transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#ECEAE4] py-20 flex justify-center">
        <button className="bg-[#397171] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#1e4b4b] transition">
          VIEW ALL RESOURCES →
        </button>
      </section>

    </main>
  );
}
