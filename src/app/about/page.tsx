import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full bg-gray-900 text-white">
      
      {/* Top Banner / Quote Section */}
      <section className="relative w-full h-[480px] flex items-center justify-start px-10 md:px-20 bg-gray-950">
        <div className="absolute inset-0 bg-black/40" />

        <Image
          src="/Images/about-banner.png" // replace with your banner
          alt="Background collage"
          fill
          className="object-cover opacity-40"
        />

        <div className="relative max-w-4xl">
          <h2 className="text-[42px] md:text-[52px] font-semibold leading-tight font-open-sans italic">
            “When you have something to say, 
            <br className="hidden md:block" />
            <span className="text-[#7DBEBE]">silence is a lie.</span>”
          </h2>
        </div>
      </section>

      {/* Profile & Story Section */}
      <section className="w-full px-10 md:px-24 py-24 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <div className="flex justify-center">
            <Image
              src="/Images/home-hero.png" // same GBENGA image you already use
              width={500}
              height={600}
              alt="Gbenga Omole"
              className="rounded-lg shadow-xl scale-x-[-1]"
            />
          </div>

          {/* Right — Text */}
          <div>
            <h1 className="text-[60px] md:text-[86px] font-bold leading-[85px] tracking-[3px] font-open-sans">
              <span className="text-[#7DBEBE]">GBENGA</span>{" "}
              <span className="text-[#397171]">OMOLE</span>
            </h1>

            <h3 className="text-[28px] font-montserrat text-gray-300 mt-4">
              The Golden Voice of Wisdom
            </h3>

            <p className="mt-8 text-gray-200 text-[18px] leading-[30px] font-montserrat">
              Gbenga Omole is a renowned teacher, speaker, and voice of wisdom
              whose compelling insights have transformed the lives of countless
              individuals. Known for his clarity of thought, spiritual depth,
              and ability to communicate timeless truths, Gbenga brings a rare
              blend of passion, intellect, and divine inspiration to every
              platform.
            </p>

            <p className="mt-6 text-gray-300 text-[18px] leading-[30px] font-montserrat">
              His mission is simple: to help people discover the truth, walk in
              purpose, and live with boldness. Through books, devotionals,
              teachings, and live sessions, Gbenga empowers believers to build
              strong character, deepen their faith, and rise into their God-given
              identity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full bg-white text-black px-10 md:px-28 py-24">
        <div className="text-center max-w-5xl mx-auto">

          <h2 className="text-[40px] font-open-sans font-semibold text-[#232326]">
            A Mission Rooted in <span className="text-[#397171]">Truth</span>
          </h2>

          <p className="mt-6 text-[#51555D] text-[20px] leading-[32px] font-montserrat">
            Every message, book, and devotional is crafted to awaken the heart,
            challenge the mind, and illuminate the path toward truth. Gbenga’s
            work centers on spiritual maturity, life transformation, and the
            pursuit of wisdom that stands the test of time.
          </p>

        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-10 md:px-24 py-24 bg-gray-900">
        <h2 className="text-[40px] font-open-sans font-bold text-center mb-16">
          Core <span className="text-[#7DBEBE]">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h4 className="text-[24px] font-semibold text-[#7DBEBE] mb-4">
              Truth
            </h4>
            <p className="text-gray-300 leading-[28px] font-montserrat">
              Speaking boldly and with clarity, grounded in eternal wisdom.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h4 className="text-[24px] font-semibold text-[#397171] mb-4">
              Character
            </h4>
            <p className="text-gray-300 leading-[28px] font-montserrat">
              Building integrity, discipline, and strength for the journey ahead.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h4 className="text-[24px] font-semibold text-[#7DBEBE] mb-4">
              Impact
            </h4>
            <p className="text-gray-300 leading-[28px] font-montserrat">
              Helping people grow, lead, and influence their world with wisdom.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white w-full flex flex-col md:flex-row items-center px-0 py-2 max-w-9xl mx-auto">
        <div
          className="
            flex
            w-[160%]
            h-[360px]
            px-[120px]
            py-[48px]
            mt-[0]
            flex-col
            justify-center
            items-center
            bg-[rgba(180,197,214,0.5)]
          "
        >
          <h4
            className="
              text-center
              font-open-sans
              text-[38px]
              font-semibold
              text-[#232326]
            "
          >
            Insights Worth More Than Gold.
          </h4>

          <p
            className="
              text-center
              w-[70%]
              mb-[36px]
              text-[20px]
              leading-[30px]
              text-[#51555D]
              font-montserrat
            "
          >
            Discover timeless truths that will feed your faith, shape your
            character, and guide your life’s decisions.
          </p>

          <button
            className="
              w-[231px]
              p-[14px]
              rounded-[4px]
              text-white
              bg-[#397171]
              hover:bg-[#2f5f5f]
              hover:-translate-y-[1px]
              transition-all
              duration-300
            "
          >
            Join the wisdom circle
          </button>
        </div>
      </section>

    </main>
  );
}
