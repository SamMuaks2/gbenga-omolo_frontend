'use client'
import { useEffect, useState } from "react";

interface Book {
  _id: string;
  title: string;
  author?: string;
  summary?: string;
  coverImage?: string;
  createdAt?: string;
}

export default function NewBookSection() {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  useEffect(() => {
    async function fetchLatestBook() {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(`${API_URL}/api/books`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        
        const data = await res.json();
        
        // Get the most recent book (first in array since sorted by createdAt: -1)
        if (Array.isArray(data) && data.length > 0) {
          setBook(data[0]);
        }
      } catch (err) {
        console.error('Error fetching latest book:', err);
        setError(err instanceof Error ? err.message : 'Failed to load book');
      } finally {
        setLoading(false);
      }
    }

    fetchLatestBook();
  }, [API_URL]);

  if (loading) {
    return (
      <section id="books" className="bg-gray-100 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse grid md:grid-cols-2 gap-10">
            <div className="bg-gray-300 h-96 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded w-32"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4"></div>
              <div className="h-24 bg-gray-300 rounded"></div>
              <div className="h-12 bg-gray-300 rounded w-48"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !book) {
    return (
      <section id="books" className="bg-gray-100 py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-600">
            {error || 'No books available'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="books" className="bg-gray-100 py-16 px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Book Image */}
        <div className="flex justify-center">
          {book.coverImage ? (
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-[300px] h-[400px] object-cover rounded-md shadow-md"
            />
          ) : (
            <div className="w-[300px] h-[400px] bg-gray-300 rounded-md shadow-md flex items-center justify-center">
              <span className="text-gray-500">No cover image</span>
            </div>
          )}
        </div>

        {/* Book Content */}
        <div>
          <p className="text-[#397171] font-medium mb-2">
            New Release
          </p>

          <h2 className="text-3xl font-bold mb-2 text-black">
            {book.title}
          </h2>

          {book.author && (
            <p className="text-[#397171] font-medium mb-4">
              by {book.author}
            </p>
          )}

          {book.summary ? (
            <p className="text-gray-700 mb-6 leading-relaxed">
              {book.summary}
            </p>
          ) : (
            <p className="text-gray-700 mb-6 leading-relaxed">
              Strengthen your spirit and nourish your walk with God. The Golden
              Voice of Wisdom collection is filled with practical wisdom,
              biblical truths, and inspiring reflections that will uplift your
              soul and guide you daily. More than just a book, it's spiritual
              nourishment for your journey.
            </p>
          )}

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