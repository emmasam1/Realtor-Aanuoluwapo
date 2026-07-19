import Badge from "./Badge";

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}) {
  return (
    <div
      className={`mb-16 max-w-3xl ${
        align === "center"
          ? "mx-auto text-center"
          : ""
      }`}
    >
      {badge && (
        <Badge>
          {badge}
        </Badge>
      )}

      <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-foreground-muted">
        {description}
      </p>
    </div>
  );
}