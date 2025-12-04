import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FeaturedBooks from "./pages/FeaturedBooks";
import HeroSection from "./pages/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      {/* Featured Book */}
      <section id="books" className="bg-gray-100 py-16 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image src="/Images/book1.png" width={300} height={400} alt="Book" />
          <div>
            <p></p>
            <h2 className="text-3xl font-bold mb-4 text-black">
              Food for Your Faith
            </h2>
            <p className="text-gray-700 mb-4">
              Strengthen your spirit and nourish your work with God. The Golden Voice of Wisdom collection is filled with practical wisdom, biblical truths, and inspiring reflections that will uplift your soul and guide you daily. More than just a book, it's spiritual nourishment for your journey.
            </p>
            <button className="flex w-[231px] p-[14px] justify-center items-center gap-[10px] rounded-[4px] text-white bg-[#397171]
                   hover:bg-[#2f5f5f] hover:-translate-y-[1px] hover:shadow-md
                   active:translate-y-0 active:shadow-sm
                   transition-all duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      <FeaturedBooks />

      {/* Testimonials */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((t) => (
            <div key={t} className="p-6 rounded shadow bg-gray-50 border">
              <p className="text-gray-700 italic">
                “Amazing transformation from reading this!”
              </p>
              <p className="font-bold mt-4">- Reader</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-gray-900 text-white py-20 px-8 text-center"
      >
        <Image
          src="/author2.jpg"
          width={200}
          height={200}
          alt="Gbenga Omole"
          className="mx-auto rounded-full"
        />
        <h2 className="text-4xl font-bold mt-6">Meet the Author</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-300">
          Gbenga Omole is a teacher of the Word committed to helping believers
          grow in practical faith.
        </p>
      </section>

      <Footer />
    </main>
  );
}
