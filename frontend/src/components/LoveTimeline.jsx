import { useEffect, useState } from "react";

const timeline = [
  {
    title: "Destiny brought you to me ❤️",
    desc: "You came to the college and in that moment, destiny quietly changed my world forever.",
  },
  {
    title: "The First Time I Saw You ✨",
    desc: "I didn’t know then, but my heart had already chosen you.",
  },
  {
    title: "Our First Memories 📸",
    desc: "Every smile, every moment with you became my favorite memory.",
  },
  {
    title: "Today and Forever 💍",
    desc: "No matter where life takes us, my heart will always belong to you.",
  },
];

export default function LoveTimeline() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-rose-50 to-pink-100 overflow-hidden">

      {/* falling petals */}
      <div className="petals">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="petal">🌹</span>
        ))}
      </div>

      <h2 className="text-5xl text-center font-bold text-rose-500 mb-16">
        Our Destiny 🌹
      </h2>

      <div className="max-w-3xl mx-auto relative">

        {/* vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-rose-300 transform -translate-x-1/2"></div>

        {timeline.map((item, i) => (
          <div
            key={i}
            className={`relative mb-16 flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            } ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            transition duration-1000`}
            style={{ transitionDelay: `${i * 300}ms` }}
          >
            <div className="bg-white p-6 rounded-xl shadow-xl w-80 hover:scale-105 transition">

              <h3 className="text-rose-500 font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
