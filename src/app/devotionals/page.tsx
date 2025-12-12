"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Devotional = {
  id: string;
  title: string;
  image: string;
  // coverImage?: string;
  description: string;
  content: string;
};

export default function DevotionalsPage() {
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDevotional = devotionals[activeIndex] ?? devotionals[0];


  useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/devotionals`)
        .then((res) => res.json())
        .then((data) =>
          setDevotionals(
            data.map((item: any) => ({
              id: item._id,
              title: item.title,
              image: item.image
                ? item.coverImage.startsWith("http")
                  ? item.coverImage
                  : `${process.env.NEXT_PUBLIC_API_URL}/${item.coverImage}`
                : "/Images/book-placeholder.png", 
              description: item.summary ?? "",
              content: item.content ?? "",
            }))
          )
        );
    }, []);



  if (devotionals.length === 0) {
      return (
        <main className="w-full h-[420px] flex items-center justify-center">
          <p className="text-gray-500">Loading devotionals...</p>
        </main>
      );
    }


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
                // src={item.image}
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
