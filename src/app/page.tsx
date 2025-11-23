import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white w-full flex flex-col md:flex-row items-center px-8 py-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            GBENGA OMOLE
          </h1>
          <p className="text-gray-600 text-xl">The Practical Word Teacher</p>
        </div>
        <div className="flex-1">
          <Image src="/author.jpg" width={500} height={600} alt="Author" />
        </div>
      </section>

      {/* Featured Book */}
      <section id="books" className="bg-gray-100 py-16 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image src="/book1.png" width={300} height={400} alt="Book" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-800">
              Food for Your Faith
            </h2>
            <p className="text-gray-700 mb-4">
              A devotional that strengthens your walk with God.
            </p>
            <button className="bg-green-700 text-white px-6 py-3 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </section>

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
