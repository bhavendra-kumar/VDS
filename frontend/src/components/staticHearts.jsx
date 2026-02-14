export default function StaticHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <div className="hearts-bg">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.5 + 1}rem`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
