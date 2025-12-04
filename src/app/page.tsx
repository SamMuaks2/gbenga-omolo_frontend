import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FeaturedBooks from "./pages/FeaturedBooks";
import HeroSection from "./pages/Hero";
import NewBookSection from "./pages/NewBook";
import TestimonialSection from "./pages/Testimonials";
import MeetTheAuthor from "./pages/Author";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <NewBookSection />

      <FeaturedBooks />

      <TestimonialSection />

      <MeetTheAuthor />
      
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
