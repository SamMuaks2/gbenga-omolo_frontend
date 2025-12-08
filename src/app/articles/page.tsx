"use client";

import { useState } from "react";
import Image from "next/image";

type Article = {
  id: string;
  title: string;
  authors?: string;
  platform: "google-scholar" | "academia" | "researchgate" | "journal" | "other";
  platformUrl: string; // direct link to article (external)
  thumbnail?: string; // book/article cover or platform logo (optional)
  summary?: string;
  tags?: string[];
};

const ARTICLES: Article[] = [
  {
    id: "article-1",
    title: "Understanding Grace in Modern Ministry",
    authors: "Gbenga Omole",
    platform: "google-scholar",
    platformUrl: "https://scholar.google.com/some-article-link",
    thumbnail: "/Images/platform-google.png",
    summary: "A theological exploration of grace in contemporary contexts.",
    tags: ["theology", "grace"],
  },
  {
    id: "article-2",
    title: "Faith and Social Justice: A Practical Approach",
    authors: "Gbenga Omole",
    platform: "academia",
    platformUrl: "https://www.academia.edu/some-article-link",
    thumbnail: "/Images/platform-academia.png",
    summary: "Practical strategies for faith-driven social engagement.",
    tags: ["justice", "practice"],
  },
  {
    id: "article-3",
    title: "Leadership, Character & Influence",
    authors: "Gbenga Omole",
    platform: "other",
    platformUrl: "https://example.com/some-article-link",
    thumbnail: "/Images/platform-other.png",
    summary: "Lessons on leadership rooted in character formation.",
    tags: ["leadership", "character"],
  },
  // Add as many as you need...
];

function PlatformBadge({ platform }: { platform: Article["platform"] }) {
  const size = 36;
  const src =
    platform === "google-scholar"
      ? "/Images/platform-google.png"
      : platform === "academia"
      ? "/Images/platform-academia.png"
      : platform === "researchgate"
      ? "/Images/platform-researchgate.png"
      : "/Images/platform-other.png";

  const alt =
    platform === "google-scholar"
      ? "Google Scholar"
      : platform === "academia"
      ? "Academia.edu"
      : platform === "researchgate"
      ? "ResearchGate"
      : "External";

  return (
    <div className="flex items-center gap-2">
      <Image src={src} alt={alt} width={size} height={size} className="rounded" />
    </div>
  );
}


export default function ArticlesPage() {
 const [q, setQ] = useState("");
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const tags = Array.from(new Set(ARTICLES.flatMap((a) => a.tags || [])));

  const filtered = ARTICLES.filter((a) => {
    const matchesQ =
      q.trim() === "" ||
      a.title.toLowerCase().includes(q.toLowerCase()) ||
      (a.authors || "").toLowerCase().includes(q.toLowerCase()) ||
      (a.summary || "").toLowerCase().includes(q.toLowerCase());
    const matchesTag = !tagFilter || (a.tags || []).includes(tagFilter);
    return matchesQ && matchesTag;
  });

  return (
    <main className="w-full px-6 md:px-20 py-16">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-open-sans font-bold mb-3">
          Scientific Articles
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl">
          A curated list of articles and papers by Gbenga Omole. Click any card to
          open the original article on the hosting platform.
        </p>

        {/* Search + Tag filters */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title, author or summary..."
            className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7DBEBE]"
            aria-label="Search articles"
          />

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setTagFilter(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                tagFilter === null ? "bg-[#397171] text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              All
            </button>

            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTagFilter((prev) => (prev === t ? null : t))}
                className={`px-3 py-1 rounded-full text-sm ${
                  tagFilter === t ? "bg-[#397171] text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-24">No articles match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <article
                key={a.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl"
              >
                {/* Entire card clickable */}
                <a
                  href={a.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* top thumbnail / image */}
                  <div className="relative w-full h-44 bg-gray-50">
                    {a.thumbnail ? (
                      <Image src={a.thumbnail} alt={a.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m4-4H8" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
                        {a.authors && <p className="text-sm text-gray-600">{a.authors}</p>}
                      </div>

                      <div className="ml-auto">
                        <PlatformBadge platform={a.platform} />
                      </div>
                    </div>

                    {a.summary && <p className="text-sm text-gray-700 mt-3 line-clamp-3">{a.summary}</p>}

                    <div className="mt-4 flex items-center gap-2 flex-wrap">
                      {(a.tags || []).map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded text-gray-700"
                        >
                          {t}
                        </span>
                      ))}

                      <span className="ml-auto text-xs text-[#397171] font-semibold">Open →</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* bottom CTA */}
      <section className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-sm text-gray-500 mb-4">Don’t see a specific article? We can add it.</p>
        <a
          href="/contact"
          className="inline-block bg-[#397171] text-white px-6 py-3 rounded hover:bg-[#2f5f5f] transition"
        >
          Request an article
        </a>
      </section>
    </main>
  );
}
