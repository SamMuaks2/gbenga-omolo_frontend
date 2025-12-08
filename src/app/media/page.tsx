"use client";
import Image from "next/image";
import { useState } from "react";

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "The Power of Faith",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      id: 2,
      title: "Biblical Leadership",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
  ];

  const podcast = {
    title: "Gbenga Omole Podcast Episode",
    url: "https://open.spotify.com/embed/episode/7k4a1ZZXv0nUFYt1fRTzzo?utm_source=generator",
  };

  const gallery = [
    "/Images/gallery1.jpg",
    "/Images/gallery2.jpg",
    "/Images/gallery3.jpg",
    "/Images/gallery4.jpg",
    "/Images/gallery5.jpg",
    "/Images/gallery6.jpg",
  ];

  return (
    <main className="px-6 md:px-20 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold text-[#397171] mb-10">Media</h1>

      {/* YOUTUBE VIDEO SECTION */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Video Messages</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow">
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* PODCAST SECTION */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Podcast</h2>

        <div className="w-full max-w-2xl">
          <iframe
            src={podcast.url}
            width="100%"
            height="232"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </section>

      {/* PHOTO ALBUM */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Photo Album</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-lg overflow-hidden shadow cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setSelectedImage(img)}
            >
              <Image src={img} alt={`Gallery ${index}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX VIEWER */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] max-w-3xl h-[80vh]">
            <Image src={selectedImage} alt="Selected" fill className="object-contain rounded-lg" />
          </div>
        </div>
      )}
    </main>
  );
}
