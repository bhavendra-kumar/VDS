import { useEffect, useRef, useState } from "react";

const lines = [
  "From the day you came into my life...",
  "everything became more beautiful.",
  "Your smile became my happiness,",
  "your presence became my peace,",
  "and without even realizing...",
  "you became my forever.",
  "",
  "Today, I just want to ask you something from my heart...",
];

export default function TypingLetter() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const letterRef = useRef(null);

  // scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (letterRef.current) observer.observe(letterRef.current);

    return () => observer.disconnect();
  }, []);

  // emotional typing effect (line by line)
  useEffect(() => {
    if (!startTyping) return;

    if (lineIndex >= lines.length) {
      setTimeout(() => setShowFinal(true), 1000);
      return;
    }

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + lines[lineIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 40);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentLine]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(prev => prev + 1);
      }, 600); // emotional pause between lines

      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex, startTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-100 via-pink-50 to-white px-6 relative overflow-hidden">

      {/* floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="floating-heart">💗</span>
        ))}
      </div>

      <div
        ref={letterRef}
        className="proposal-card-emotional max-w-2xl p-10 md:p-14"
      >

        <h2 className="proposal-heading-emotional">
          I want to tell you something... ❤️
        </h2>

        <div className="proposal-text-emotional">

          {displayedLines.map((line, i) => (
            <p key={i} className="fade-in-line">
              {line}
            </p>
          ))}

          {currentLine && (
            <p>
              {currentLine}
              <span className="cursor">|</span>
            </p>
          )}

        </div>

       

      </div>

    </section>
  );
}
