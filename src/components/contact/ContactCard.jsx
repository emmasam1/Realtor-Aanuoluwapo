import { motion } from "framer-motion";

export default function ContactCard({
  icon,
  title,
  value,
  href,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
      group
      flex
      items-start
      gap-5
      rounded-[28px]
      border
      border-border
      bg-card
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:border-primary/30
      hover:shadow-2xl
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="mt-1 text-foreground-muted break-all">
          {value}
        </p>
      </div>
    </motion.a>
  );
}