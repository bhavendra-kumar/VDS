const quotes = [
  "Every love story is beautiful, but ours is my favorite ❤️",
  "You are my today and all my tomorrows 💖",
  "I fall in love with you again every day 💕"
];

export default function Quotes() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl text-rose-600 mb-6">From My Heart 💌</h2>
      {quotes.map((q, i) => (
        <p key={i} className="text-xl text-rose-900 mb-4">
          {q}
        </p>
      ))}
    </section>
  );
}
