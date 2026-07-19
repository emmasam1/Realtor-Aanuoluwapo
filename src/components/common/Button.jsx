"use client";

export default function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-primary text-white hover:-translate-y-1 hover:shadow-2xl",

    secondary:
      "border border-primary text-primary hover:bg-primary hover:text-white",

    ghost:
      "hover:bg-primary/10 text-primary",
  };

  return (
    <button
      {...props}
      className={`
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-full
      px-8
      py-4
      font-semibold
      transition-all
      duration-300
      shadow-lg
      ${variants[variant]}
      ${className}
      `}
    >
      {icon}

      {children}
    </button>
  );
}