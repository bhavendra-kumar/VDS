import { useEffect, useState } from "react";

// Auto-import all images from src/uploads (Vite)
const uploadedPhotos = Object.entries(
  import.meta.glob("../uploads/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  })
)
  .map(([path, src]) => ({
    path,
    src,
    name: path.split("/").pop() ?? "memory",
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// fallback
const fallbackPhotos = [
  "/rb4.jpeg",
  "/rb2.jpeg",
  "/rb3.jpeg",
  "/rb8.jpeg",
  "/rb6.jpeg",
  "/rb7.jpeg",
  "/rb5.jpeg",
  "/rb9.jpeg",
];

const photos = uploadedPhotos.length
  ? uploadedPhotos
  : fallbackPhotos.map((src) => ({ src }));

// cute captions
const captions = [
  "You make my world beautiful 💖",
  "My favorite place is with you ❤️",
  "Every moment with you is magic ✨",
   "My heart belongs to you 💓",
  "Forever isn't enough with you 💕",
  "You are my dream come true 💫",
   "You are my happiness 🌸",
  "You complete me 💞",
];

export default function Gallery() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-pink-100 via-rose-50 to-white overflow-hidden">

      {/* floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="heart heart1">💖</div>
        <div className="heart heart2">💕</div>
        <div className="heart heart3">💗</div>
        <div className="heart heart4">💞</div>
      </div>

      {/* Heading */}
      <div className={`text-center transition duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-5xl font-bold text-rose-500 mb-4">
          Our Memories 💕
        </h2>

        <p className="text-rose-400 italic text-lg">
          Every photo holds a piece of my heart...
        </p>

        <p className="mt-3 text-gray-500">
          Made with endless love, just for you ❤️
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 px-6">

        {photos.map((img, i) => (
          <div
            key={i}
            className={`polaroid transition duration-500 hover:scale-110 hover:-rotate-2`}
            style={{
              transform: `rotate(${(i % 2 === 0 ? -3 : 3)}deg)`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <img
              src={img.src}
              alt="memory"
              className="w-64 h-64 object-cover rounded-md"
            />

            <p className="mt-3 text-gray-600 text-sm font-medium text-center">
              {captions[i % captions.length]}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
