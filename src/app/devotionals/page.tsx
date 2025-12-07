import Image from "next/image";

const devotionals = [
  "/Images/book1.png",
  "/Images/book2.png",
  "/Images/book3.png",
  "/Images/book4.png",
];

export default function DevotionalsPage() {
  return (
    <main className="w-full">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Images/devotionals-hero.jpg" //Pick a compressed overview of the whole page
          alt="Devotionals Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
            DEVOTIONALS
          </h1>
          <p className="mt-2 italic text-lg md:text-xl">
            by Gbenga Omole
          </p>
        </div>
      </section>

      {/* ================= DEVOTIONAL GRID ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {devotionals.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] shadow-md hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Devotional ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-[#ECEAE4] py-20 flex justify-center">
        <button className="bg-[#397171] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#1e4b4b] transition">
          VIEW ALL RESOURCES →
        </button>
      </section>

    </main>
  );
}
