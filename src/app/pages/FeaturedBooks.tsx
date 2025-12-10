// export default function FeaturedBooks() {
//   const books = [
//     {
//       id: 1,
//       title: "The Path of Wisdom",
//       description: "A comprehensive guide to living a life of purpose and meaning.",
//       image: "/Images/book2.png",
//     },
//     {
//       id: 2,
//       title: "The Path of Wisdom",
//       description: "A comprehensive guide to living a life of purpose and meaning.",
//       image: "/Images/book3.png",
//     },
//     {
//       id: 3,
//       title: "The Path of Wisdom",
//       description: "A comprehensive guide to living a life of purpose and meaning.",
//       image: "/Images/book4.png",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#EEF4F4] py-[80px]">
//       <div className="max-w-[1200px] mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center mb-[48px]">
//           <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1A1A1A]">
//             Featured Books
//           </h2>
//           <p className="text-[#6B7280] mt-2">
//             Explore life-changing insights and wisdom
//           </p>
//         </div>

//         {/* Books Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[44px]">
//           {books.map((book) => (
//             <div
//               key={book.id}
//               className="bg-white rounded-[12px] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300"
//             >
//               {/* Book Image */}
//               <img
//                 src={book.image}
//                 alt={book.title}
//                 className="w-[120px] h-auto mb-4 object-contain"
//               />

//               {/* Book Title */}
//               <h3 className="font-semibold text-[#1F2937] mb-2">
//                 {book.title}
//               </h3>

//               {/* Book Description */}
//               <p className="text-sm text-[#6B7280] mb-4">
//                 {book.description}
//               </p>

//               {/* Learn More Link */}
//               <button className="text-[#397171] text-sm font-medium hover:underline">
//                 Learn More →
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="flex justify-center">
//           <button className="flex w-[231px] p-[14px] justify-center items-center gap-[10px] rounded-[4px] text-white bg-[#397171] 
//                              hover:bg-[#2f5f5f] hover:-translate-y-[1px] hover:shadow-md
//                              transition-all duration-300 ease-in-out">
//             View All Books
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client'
// import { useEffect, useState } from "react";

// export default function FeaturedBooks() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/featured`)
//       .then(res => res.json())
//       .then(setBooks);
//   }, []);

//   return (
//     <section className="w-full bg-[#EEF4F4] py-[80px]">
//       <div className="max-w-[1200px] mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-8">
//           {books.map((book: any) => (
//             <div key={book._id} className="bg-white p-6 rounded-xl text-center">
//               <img src={book.coverImage} className="w-[120px] mx-auto mb-4" />
//               <h3 className="font-semibold">{book.title}</h3>
//               <p className="text-sm text-gray-600">{book.summary}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

interface Book {
  _id: string;
  title: string;
  author?: string;
  summary?: string;
  coverImage?: string;
  views?: number;
}

export default function FeaturedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  useEffect(() => {
    async function fetchFeaturedBooks() {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(`${API_URL}/api/books/featured`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        
        const data = await res.json();
        setBooks(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching featured books:', err);
        setError(err instanceof Error ? err.message : 'Failed to load books');
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedBooks();
  }, [API_URL]);

  if (loading) {
    return (
      <section className="w-full bg-[#EEF4F4] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-[#EEF4F4] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center text-red-600">
            <p>Error loading featured books: {error}</p>
          </div>
        </div>
      </section>
    );
  }

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
        {books.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[44px]">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="bg-white rounded-[12px] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Book Image */}
                  {book.coverImage ? (
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-[120px] h-[160px] mb-4 object-cover rounded shadow-sm"
                    />
                  ) : (
                    <div className="w-[120px] h-[160px] mb-4 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No cover</span>
                    </div>
                  )}

                  {/* Book Title */}
                  <h3 className="font-semibold text-[#1F2937] mb-2">
                    {book.title}
                  </h3>

                  {/* Book Author */}
                  {book.author && (
                    <p className="text-xs text-[#397171] mb-2 font-medium">
                      by {book.author}
                    </p>
                  )}

                  {/* Book Description */}
                  {book.summary && (
                    <p className="text-sm text-[#6B7280] mb-4 line-clamp-3">
                      {book.summary}
                    </p>
                  )}

                  {/* Learn More Link */}
                  <button className="text-[#397171] text-sm font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <Link href="/books">
                <button className="flex w-[231px] p-[14px] justify-center items-center gap-[10px] rounded-[4px] text-white bg-[#397171] 
                                 hover:bg-[#2f5f5f] hover:-translate-y-[1px] hover:shadow-md
                                 transition-all duration-300 ease-in-out">
                  View All Books
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#6B7280]">No featured books available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}