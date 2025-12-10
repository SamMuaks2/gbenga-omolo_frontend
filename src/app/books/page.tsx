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
  isFeatured?: boolean;
}

export default function AllBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  useEffect(() => {
    async function fetchAllBooks() {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(`${API_URL}/api/books`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        
        const data = await res.json();
        setBooks(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError(err instanceof Error ? err.message : 'Failed to load books');
      } finally {
        setLoading(false);
      }
    }

    fetchAllBooks();
  }, [API_URL]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EEF4F4] py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-300 rounded w-64 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl">
                  <div className="h-40 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EEF4F4] py-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error loading books: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEF4F4] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-[#397171] hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2">
            All Books
          </h1>
          <p className="text-[#6B7280]">
            Browse our complete collection of {books.length} books
          </p>
        </div>

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white rounded-xl p-6 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Featured Badge */}
                {book.isFeatured && (
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Book Image */}
                <div className="flex justify-center mb-4">
                  {book.coverImage ? (
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-[140px] h-[200px] object-cover rounded shadow-sm"
                    />
                  ) : (
                    <div className="w-[140px] h-[200px] bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No cover</span>
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="text-center flex-1">
                  <h3 className="font-semibold text-[#1F2937] mb-1 line-clamp-2">
                    {book.title}
                  </h3>

                  {book.author && (
                    <p className="text-xs text-[#397171] mb-2 font-medium">
                      by {book.author}
                    </p>
                  )}

                  {book.summary && (
                    <p className="text-sm text-[#6B7280] line-clamp-3 mb-3">
                      {book.summary}
                    </p>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4 text-xs text-[#9CA3AF] mb-3">
                    <span>👁️ {book.views || 0} views</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-auto py-2 px-4 bg-[#397171] text-white rounded hover:bg-[#2f5f5f] transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-[#6B7280] text-lg">
              No books available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}