export default function FloatingHearts() {
  return (
    <div className="hearts-bg">
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="heart animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        >
          🤍
        </span>
      ))}
    </div>
  );
}
