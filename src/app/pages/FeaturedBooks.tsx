export default function FeaturedBooks() {
  const books = [
    {
      id: 1,
      title: "The Path of Wisdom",
      description: "A comprehensive guide to living a life of purpose and meaning.",
      image: "/Images/book2.png",
    },
    {
      id: 2,
      title: "The Path of Wisdom",
      description: "A comprehensive guide to living a life of purpose and meaning.",
      image: "/Images/book3.png",
    },
    {
      id: 3,
      title: "The Path of Wisdom",
      description: "A comprehensive guide to living a life of purpose and meaning.",
      image: "/Images/book4.png",
    },
  ];

  return (
    <section className="w-full bg-[#EEF4F4] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-[48px]">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1A1A1A]">
            Featured Books
          </h2>
          <p className="text-[#6B7280] mt-2">
            Explore life-changing insights and wisdom
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[44px]">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-[12px] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Book Image */}
              <img
                src={book.image}
                alt={book.title}
                className="w-[120px] h-auto mb-4 object-contain"
              />

              {/* Book Title */}
              <h3 className="font-semibold text-[#1F2937] mb-2">
                {book.title}
              </h3>

              {/* Book Description */}
              <p className="text-sm text-[#6B7280] mb-4">
                {book.description}
              </p>

              {/* Learn More Link */}
              <button className="text-[#397171] text-sm font-medium hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="flex w-[231px] p-[14px] justify-center items-center gap-[10px] rounded-[4px] text-white bg-[#397171] 
                             hover:bg-[#2f5f5f] hover:-translate-y-[1px] hover:shadow-md
                             transition-all duration-300 ease-in-out">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
}
