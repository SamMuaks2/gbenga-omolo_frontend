// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// type Devotional = {
//   id: string;
//   title: string;
//   image: string;
//   // coverImage?: string;
//   description: string;
//   content: string;
// };

// export default function DevotionalsPage() {
//   const [devotionals, setDevotionals] = useState<Devotional[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeDevotional = devotionals[activeIndex] ?? devotionals[0];


//   useEffect(() => {
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/devotionals`)
//         .then((res) => res.json())
//         .then((data) =>
//           setDevotionals(
//             data.map((item: any) => {
//               const normalizedImage = item.coverImage
//                 // ? item.coverImage.replace(/\\/g, "/")
//                 ? item.coverImage
//                 : "/Images/book-placeholder.png";

//               return {
//                 id: item._id,
//                 title: item.title,
//                 image: normalizedImage.startsWith("http")
//                   ? normalizedImage
//                   : `${process.env.NEXT_PUBLIC_API_URL}/${normalizedImage}`,
//                 description: item.summary ?? "",
//                 content: item.content ?? "",
//               };
//             })
//           )
//         );
//     }, []);



//   if (devotionals.length === 0) {
//       return (
//         <main className="w-full h-[420px] flex items-center justify-center">
//           <p className="text-gray-500">Loading devotionals...</p>
//         </main>
//       );
//     }


//    return (
//     <main className="w-full">

//       {/* ================= ACTIVE BANNER SLIDER ================= */}
//       <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden bg-black">
//         <Image
//           src={devotionals[activeIndex].image}
//           alt={devotionals[activeIndex].title}
//           fill
//           className="object-cover opacity-40"
//         />

//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
//             {devotionals[activeIndex].title}
//           </h1>
//           <p className="mt-3 text-lg opacity-90">
//             {devotionals[activeIndex].description}
//           </p>
//         </div>
//       </section>

//       {/* ================= DEVOTIONAL GRID ================= */}
//       <section className="bg-white py-20 px-6 md:px-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {devotionals.map((item, index) => (
//             <Link
//               key={item.id}
//               href={`/devotionals/${item.id}`}
//               onMouseEnter={() => setActiveIndex(index)}
//               className="relative w-full aspect-[3/4] shadow-md hover:scale-105 transition"
//             >
//               <Image
//                 // src={item.image}
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="bg-[#ECEAE4] py-20 flex justify-center">
//         <button className="bg-[#397171] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#1e4b4b] transition">
//           VIEW ALL RESOURCES →
//         </button>
//       </section>

//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Devotional = {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  summary?: string;
  type?: string;
  views?: number;
};

export default function DevotionalsPage() {
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  useEffect(() => {
    async function fetchDevotionals() {
      try {
        setLoading(true);
        setError(null);

        console.log('🔍 Fetching devotionals from:', `${API_URL}/api/devotionals`);
        
        const res = await fetch(`${API_URL}/api/devotionals`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('✅ Devotionals data:', data);

        setDevotionals(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('❌ Error fetching devotionals:', err);
        setError(err instanceof Error ? err.message : 'Failed to load devotionals');
      } finally {
        setLoading(false);
      }
    }

    fetchDevotionals();
  }, [API_URL]);

  // Loading state
  if (loading) {
    return (
      <main className="w-full h-[420px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#397171] mx-auto mb-4"></div>
          <p className="text-gray-500">Loading devotionals...</p>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="w-full min-h-[420px] flex items-center justify-center p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <svg className="w-12 h-12 text-red-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <h3 className="text-red-800 font-semibold mb-2">Failed to Load Devotionals</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  // Empty state
  if (devotionals.length === 0) {
    return (
      <main className="w-full min-h-[420px] flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <p className="text-gray-500 text-lg">No devotionals available yet</p>
          <p className="text-gray-400 text-sm mt-2">Check back soon for new content!</p>
        </div>
      </main>
    );
  }

  const activeDevotional = devotionals[activeIndex];

  return (
    <main className="w-full">

      {/* ================= ACTIVE BANNER SLIDER ================= */}
      <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden bg-black">
        {activeDevotional.coverImage ? (
          <Image
            src={activeDevotional.coverImage}
            alt={activeDevotional.title}
            fill
            className="object-cover opacity-40"
            unoptimized
            onError={(e) => {
              console.error('Image load error:', activeDevotional.coverImage);
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-[#397171] to-[#2f5f5f] opacity-60"></div>
        )}

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
            {activeDevotional.title}
          </h1>
          {activeDevotional.summary && (
            <p className="mt-3 text-lg opacity-90 max-w-2xl mx-auto">
              {activeDevotional.summary}
            </p>
          )}
          {activeDevotional.type && (
            <span className="inline-block mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              {activeDevotional.type.charAt(0).toUpperCase() + activeDevotional.type.slice(1)} Devotional
            </span>
          )}
        </div>
      </section>

      {/* ================= DEVOTIONAL GRID ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Devotionals</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {devotionals.map((item, index) => (
              <Link
                key={item._id}
                href={`/devotionals/${item.slug}`}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative w-full aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"
              >
                {item.coverImage ? (
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                    onError={(e) => {
                      console.error('Image load error:', item.coverImage);
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300"%3E%3Crect fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#397171] to-[#2f5f5f] flex items-center justify-center">
                    <span className="text-white text-center p-4">{item.title}</span>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    {item.views !== undefined && (
                      <p className="text-xs opacity-80">👁️ {item.views} views</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#ECEAE4] py-20 flex justify-center">
        <Link href="/resources">
          <button className="bg-[#397171] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#1e4b4b] transition">
            VIEW ALL RESOURCES →
          </button>
        </Link>
      </section>

    </main>
  );
}