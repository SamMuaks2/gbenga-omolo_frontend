import Image from "next/image";

export default function NewBookSection() {
  return (
    <section id="books" className="bg-gray-100 py-16 px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Book Image */}
        <div className="flex justify-center">
          <Image
            src="/Images/book1.png"
            width={300}
            height={400}
            alt="Book"
            className="rounded-md shadow-md"
            priority
          />
        </div>

        {/* Book Content */}
        <div>
          <p className="text-[#397171] font-medium mb-2">
            New Release
          </p>

          <h2 className="text-3xl font-bold mb-4 text-black">
            Food for Your Faith
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Strengthen your spirit and nourish your walk with God. The Golden
            Voice of Wisdom collection is filled with practical wisdom,
            biblical truths, and inspiring reflections that will uplift your
            soul and guide you daily. More than just a book, it's spiritual
            nourishment for your journey.
          </p>

          <button
            className="
              flex
              w-[231px]
              p-[14px]
              justify-center
              items-center
              gap-[10px]
              rounded-[4px]
              text-white
              bg-[#397171]
              hover:bg-[#2f5f5f]
              hover:-translate-y-[1px]
              hover:shadow-md
              active:translate-y-0
              active:shadow-sm
              transition-all
              duration-300
              ease-in-out
            "
          >
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
}
