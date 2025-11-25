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
          <h1
            className="
              font-open-sans
              text-[120px]
              font-bold
              leading-[110px]
              tracking-[4px]
            "
          >
            <span className="text-[#7DBEBE]">GBENGA</span>{" "}
            <span className="text-[#397171]">OMOLE</span>
          </h1>

          <p
            className="
              flex-[1_0_0]
              text-[#232326]
              font-montserrat
              text-[34px]
              font-medium
              pt-[5%]
              leading-[27px]
            "
          >
            The Golden Voice of Wisdom
          </p>

        </div>

        <div className="flex-1 flex justify-center">
          <Image src="/Images/home-hero.png" width={500} height={600} alt="Author" className="scale-x-[-1]" />
        </div>
      </section>

      <section className="bg-white w-full flex flex-col md:flex-row items-center px-8 py-16 max-w-7xl mx-auto">
        <div className="
            flex
            w-[160%]
            h-[360px]
            mx-[0]
            px-[120px]
            py-[48px]
            mt-[-10.5%]
            flex-col
            justify-center
            items-center
            gap-[24px]
            bg-[rgba(180,197,214,0.5)]
          ">
             <h4
                className="
                  text-center
                  font-open-sans
                  text-[38px]
                  font-semibold
                  leading-normal
                  text-[#232326]
                "
              >
                Insights Worth More Than Gold.
              </h4>

              <p
                className="
                  text-center
                  text-[#51555D]
                  font-montserrat
                  text-[20px]
                  font-normal
                  leading-[30px]
                "
              >
                Discover timeless truths that will feed your faith, shape your character, and guide your life’s decisions.
              </p>
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
