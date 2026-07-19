import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative py-24 lg:py-32 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}