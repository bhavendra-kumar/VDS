import { useEffect, useState, useRef } from "react";

/* Fade In Component */
function FadeInSection({ children }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {children}
    </div>
  );
}

/* Letter text */
const letterText = `Ammu,

There are moments in life that seem ordinary at first,
but later you realize they changed everything.

The day you came to my college for your campus visit,
I didn’t know destiny was quietly walking toward me.
It was just another day…
until it became the day my heart quietly found you.

And then, the first time I truly noticed you at Vasu Cafe,
something about you stayed with me.
I don’t know if it was your smile,
your presence,
or the way my heart suddenly felt connected to you.

From that moment, you were no longer just someone I saw.
You became someone I felt.

Slowly, gently, without any warning,
you became a part of my thoughts,
my peace,
and my happiness.

I didn’t realize when it happened,
but one day, my heart told me clearly —
it was you.
It had always been you, Ammu.

I know we may not always have perfect days.
We may argue.
We may get upset.
We may have moments where we don’t understand each other.

But even then,
I don’t want to leave.
I want to stay.
I want to fix things.
I want to understand you better.
I want us.

Because loving you is not about never fighting.
It’s about never giving up on each other.

No matter how hard the day is,
no matter how heavy life feels,
I want to be the person who stays beside you,
who chooses you again and again.

You are my comfort in chaos,
my calm in silence,
and my home in this world.

And if I had to live this life again,
my heart would still find you,
still choose you,
still love you.

I love you, Ammu.

Not just for today.
But for every tomorrow.

Forever yours,
Your Bhavi ❤️
`;


export default function LoveLetter() {
  const [text, setText] = useState("");
  const [showLetter, setShowLetter] = useState(false);

  // Envelope opening first
  useEffect(() => {
    setTimeout(() => setShowLetter(true), 2000);
  }, []);

  // typing effect
  useEffect(() => {
    if (!showLetter) return;

    let i = 0;

    const interval = setInterval(() => {
      setText(letterText.slice(0, i));
      i++;
      if (i > letterText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [showLetter]);

  return (
    <section className="min-h-screen romantic-bg flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* floating hearts */}
      <div className="hearts-container">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="floating-heart">💗</span>
        ))}
      </div>

      {/* falling roses */}
      <div className="roses-container">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="falling-rose">🌹</span>
        ))}
      </div>

      {/* Envelope */}
      {!showLetter && (
        <div className="envelope-container">
          <div className="envelope">
            <div className="flap"></div>
            <div className="body"></div>
          </div>

          <p className="mt-6 text-rose-700 text-xl animate-pulse">
            Opening my heart for you...
          </p>
        </div>
      )}

      {/* Letter */}
      {showLetter && (
        <FadeInSection>
          <div className="letter-paper">
         <br />
            <h1 className="text-4xl md:text-5xl text-rose-600 mb-6 text-center glow">
              A Letter From My Heart 💌
            </h1>

            <pre className="letter-text">
              {text}
              <span className="cursor">|</span>
            </pre>

          </div>
        </FadeInSection>
      )}

      {/* Final screen */}
      {text.length === letterText.length && (
  <FadeInSection>
    <div className="mt-32 flex flex-col items-center justify-center text-center relative px-6">

      {/* soft glowing emotional aura */}
      <div className="absolute w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* her name — emotional anchor */}
      <h2 className="relative text-5xl md:text-7xl font-semibold text-rose-600 emotional-name">
        Ammu...
      </h2>

      {/* pause line */}
      <p className="relative mt-8 text-xl md:text-2xl text-rose-900 emotional-line">
        I don’t know what the future holds...
      </p>

      <p className="relative mt-4 text-xl md:text-2xl text-rose-900 emotional-line delay-1">
        I don’t know what challenges we may face...
      </p>

      {/* core truth */}
      <p className="relative mt-8 text-2xl md:text-3xl text-rose-800 emotional-line delay-2">
        But there is one thing my heart knows with complete certainty...
      </p>

      {/* main emotional truth */}
      <p className="relative mt-10 text-3xl md:text-5xl text-rose-700 font-medium emotional-main delay-3">
        It wants you.
      </p>

      <p className="relative mt-4 text-3xl md:text-5xl text-rose-700 font-medium emotional-main delay-4">
        It chooses you.
      </p>

      <p className="relative mt-4 text-3xl md:text-5xl text-rose-700 font-medium emotional-main delay-5 animate-heartbeat glow">
        It will always choose you. ❤️
      </p>

      {/* final vulnerable ask */}
      <p className="relative mt-12 text-2xl md:text-4xl text-rose-600 emotional-final delay-6">
        Will you stay with me... not just for now,
        <br />
        but for every tomorrow we are given? 💍
      </p>

      {/* floating emotional hearts */}
      <div className="mt-12 flex gap-6 text-4xl emotional-hearts delay-7">
        💖 💗 💞 💓 💘
      </div>

    </div>
  </FadeInSection>
)}
<br />
<br />

    </section>
  );
}
