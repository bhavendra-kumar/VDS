export default function FinalMessage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-rose-100 via-pink-50 to-white px-6">

      {/* glowing background aura */}
      <div className="absolute w-[400px] h-[400px] bg-rose-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* floating hearts */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        
      </div>
     <br />
     <br />
     <br /><br />
      {/* main emotional heading */}
      <h2 className="relative text-5xl md:text-7xl font-semibold text-rose-600 glow animate-fadeRise">
        Rishi, I Love You ❤️
      </h2>

      {/* emotional future description */}
      <p className="relative mt-10 text-xl md:text-2xl text-rose-900 max-w-2xl leading-relaxed animate-fadeRise delay-1">
        I don’t just see you in my present...
        <br />
        I see you in every tomorrow of my life.
      </p>

      <p className="relative mt-6 text-xl md:text-2xl text-rose-900 max-w-2xl leading-relaxed animate-fadeRise delay-2">
        I imagine us laughing at small things,
        <br />
        holding hands without a reason,
        <br />
        standing beside each other through every moment life gives us.
      </p>

      <p className="relative mt-6 text-xl md:text-2xl text-rose-900 max-w-2xl leading-relaxed animate-fadeRise delay-3">
        Not because life will always be perfect,
        <br />
        but because we will have each other.
      </p>

      {/* forever promise */}
      <p className="relative mt-10 text-2xl md:text-4xl text-rose-600 font-medium animate-heartbeat glow delay-4">
        I promise to choose you,
        <br />
        today, tomorrow, and forever. 💍
      </p>

      {/* signature */}
      <p className="relative mt-12 text-lg md:text-xl text-rose-800 italic animate-fadeRise delay-5">
        Forever yours,
        <br />
        Bhavi ❤️
      </p>

    </section>
  );
}
