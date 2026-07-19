"use client";

const stats = [
  {
    value: "500+",
    title: "Students",
  },
  {
    value: "300+",
    title: "Deals Closed",
  },
  {
    value: "7+",
    title: "Years Experience",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-5">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary"
        >
          <h2 className="text-4xl font-black text-primary">
            {item.value}
          </h2>

          <p className="mt-3 text-sm text-foreground-muted">
            {item.title}
          </p>
        </div>
      ))}

    </div>
  );
}