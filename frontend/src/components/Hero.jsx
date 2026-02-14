import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden romantic-hero-bg px-6">

      {/* glowing background aura */}
      <div className="absolute w-[500px] h-[500px] bg-rose-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            💖
          </span>
        ))}
      </div>

      {/* main content */}
      <div
        className={`relative transition-all duration-2000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-rose-600 glow animate-fadeRise">
          Happy Valentine’s Day, Ammu ❤️
        </h1>

        {/* emotional subtitle */}
        <p className="mt-6 text-xl md:text-2xl text-rose-900 animate-fadeRise delay-1 max-w-xl">
          From the moment you entered my life,
          <br />
          everything became more beautiful.
        </p>

        {/* deeper emotional line */}
        <p className="mt-6 text-lg md:text-xl text-rose-800 animate-fadeRise delay-2 italic">
          This is not just a page…
          <br />
          it’s a small piece of my heart, made only for you.
        </p>

        {/* scroll hint */}
        <div className="mt-16 animate-bounce text-rose-500 text-lg">
          Scroll slowly ❤️
        </div>

      </div>

    </section>
  );
}
