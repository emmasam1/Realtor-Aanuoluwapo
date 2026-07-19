export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      rounded-[28px]
      border
      border-border
      bg-card
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      ${className}
      `}
    >
      {children}
    </div>
  );
}