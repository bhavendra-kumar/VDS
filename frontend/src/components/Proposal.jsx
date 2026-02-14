import { useState, useEffect } from "react";

export default function Proposal() {
  const [yes, setYes] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (yes) {
      setTimeout(() => setCelebrate(true), 300);
    }
  }, [yes]);

  // move NO button randomly
  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setNoPos({ x, y });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-rose-50 to-white overflow-hidden">

      {/* celebration hearts */}
      {celebrate && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <span key={i} className="celebrate-heart">💖</span>
          ))}
          {[...Array(15)].map((_, i) => (
            <span key={i} className="celebrate-rose">🌹</span>
          ))}
        </div>
      )}

      {/* card */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 text-center max-w-md border border-rose-200 z-10">

        {!yes ? (
          <>
            <h2 className="text-4xl font-bold text-rose-500 mb-4 animate-fadeIn">
              Ammu... 💕
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              You came into my life like destiny...
            </p>

            <h3 className="text-2xl text-rose-600 mb-8 font-semibold">
              Will you stay with me forever? 💍
            </h3>

            {/* buttons container */}
            <div className="flex justify-center gap-8 items-center">

              {/* YES */}
              <button
                onClick={() => setYes(true)}
                className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-rose-300 transition duration-300 animate-pulse"
              >
                Yes, Forever 💖
              </button>

              {/* NO */}
              <button
                onMouseEnter={moveNoButton}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`
                }}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300"
              >
                No 😔
              </button>

            </div>
          </>
        ) : (
          <div className="animate-romanticReveal">

            <h2 className="text-4xl font-bold text-rose-500 mb-4 glow">
              You Said YES! 💍
            </h2>

            <p className="text-xl text-gray-700 mb-3">
              This is the most beautiful moment of my life ❤️
            </p>

            <p className="text-3xl text-rose-600 font-bold animate-bounce">
              I Love You So Much, Ammu 💖🥰
            </p>

            <p className="mt-4 text-gray-500 italic animate-fadeIn">
              Forever Yours... ❤️
            </p>

          </div>
        )}

      </div>

    </section>
  );
}
