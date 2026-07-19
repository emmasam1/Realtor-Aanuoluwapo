export default function Badge({
  children,
}) {
  return (
    <span
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-primary/20
      bg-primary/10
      px-5
      py-2
      text-sm
      font-semibold
      text-primary
      "
    >
      {children}
    </span>
  );
}