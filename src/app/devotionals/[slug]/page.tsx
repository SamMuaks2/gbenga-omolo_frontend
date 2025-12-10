// import Image from "next/image";

// type Devotional = {
//   id: string;
//   title: string;
//   image: string;
//   description: string;
//   content: string;
// };

// const devotionals: Devotional[] = [
//   {
//     id: "prodigal-god",
//     title: "The Prodigal God",
//     image: "/Images/book1.png",
//     description: "A powerful devotional on grace.",
//     content: "Full devotional content goes here...",
//   },
//   {
//     id: "counterfeit-gods",
//     title: "Counterfeit Gods",
//     image: "/Images/book2.png",
//     description: "Understanding modern idols.",
//     content: "Full devotional content goes here...",
//   },
//   {
//     id: "generous-justice",
//     title: "Generous Justice",
//     image: "/Images/book3.png",
//     description: "Faith and social justice.",
//     content: "Full devotional content goes here...",
//   },
//   {
//     id: "generous-justice-2",
//     title: "Generous Justice 2",
//     image: "/Images/book4.png",
//     description: "Faith and social justice continued.",
//     content: "Full devotional content goes here...",
//   },
// ];

// export default async function DevotionalDetails({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params; 

//   const devotional = devotionals.find((d) => d.id === slug);

//   if (!devotional) {
//     return <p className="p-20">Devotional not found.</p>;
//   }

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/devotionals/slug/${params.slug}`,
//     { cache: "no-store" }
//   );

//   return (
//     <main className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-12 items-start">
//         <div className="relative w-full aspect-[3/4] shadow rounded overflow-hidden">
//           <Image
//             src={devotional.image}
//             alt={devotional.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div>
//           <h1 className="text-3xl font-bold mb-4">{devotional.title}</h1>
//           <p className="text-gray-600 mb-6">{devotional.description}</p>
//           <p className="leading-relaxed text-gray-800">
//             {devotional.content}
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }


import { notFound } from "next/navigation";

interface Devotional {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author?: string;
  date?: string;
  scripture?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all devotionals
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/devotionals`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return [];
    }

    const devotionals: Devotional[] = await res.json();
    
    return devotionals.map((devotional) => ({
      slug: devotional.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/devotionals/slug/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return {
        title: "Devotional Not Found",
      };
    }

    const devotional: Devotional = await res.json();

    return {
      title: `${devotional.title} | Devotionals`,
      description: devotional.content.substring(0, 160),
    };
  } catch (error) {
    return {
      title: "Devotional Not Found",
    };
  }
}

export default async function DevotionalPage({ params }: PageProps) {
  // ✅ FIX: Await params to resolve the Promise
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/devotionals/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const devotional: Devotional = await res.json();

  return (
    <div className="min-h-screen bg-[#EEF4F4] py-16 px-6">
      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        
        {/* Cover Image */}
        {devotional.coverImage && (
          <div className="mb-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
            <img
              src={devotional.coverImage}
              alt={devotional.title}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-t-xl"
            />
          </div>
        )}

        {/* Category/Tags */}
        {devotional.category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#397171] text-white text-sm rounded-full">
              {devotional.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
          {devotional.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280] mb-8 pb-8 border-b border-gray-200">
          {devotional.author && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              {devotional.author}
            </span>
          )}
          {devotional.date && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {new Date(devotional.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          )}
        </div>

        {/* Scripture Reference */}
        {devotional.scripture && (
          <div className="bg-[#397171]/10 border-l-4 border-[#397171] p-6 mb-8 rounded-r-lg">
            <p className="text-[#397171] font-semibold italic">
              {devotional.scripture}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-[#1F2937] leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: devotional.content }}
          />
        </div>

        {/* Tags */}
        {devotional.tags && devotional.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-[#6B7280] mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {devotional.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/devotionals"
            className="inline-flex items-center gap-2 text-[#397171] hover:text-[#2f5f5f] transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Devotionals
          </a>
        </div>
      </article>
    </div>
  );
}