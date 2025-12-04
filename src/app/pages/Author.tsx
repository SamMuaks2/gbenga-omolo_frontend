import Image from "next/image";
import React from "react";

export default function MeetTheAuthor() {
  return (
    <section className="bg-gray-900 text-white py-14 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Author Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Images/author.png"
            alt="Author"
            width={400}
            height={500}
            className="rounded-md object-cover mt-[-10%]"
          />
        </div>

        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-6">Meet the Author</h2>
          <p className="text-white mb-6">
            Gbenga Omole is more than an author. He is a kingdom-centered
            thought-leader, teacher, and mentor whose calling is to equip lives
            through God’s Word and life-tested wisdom.
          </p>
          <p className="text-white mb-6">
            For decades, he has shared insights that bridge faith and daily
            living, inspiring believers to walk in purpose, make sound decisions,
            and overcome life’s challenges with grace. Now, through his books, 
            his voice reaches further than ever before.
          </p>
          <button className="px-6 py-3 border border-white text-white font-medium rounded hover:bg-gray-400 hover:text-white transition">
            Read Full Biography
          </button>
        </div>
      </div>
    </section>
  );
};

