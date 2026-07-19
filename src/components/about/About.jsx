import Section from "../common/Section";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <Section id="about">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        <AboutImage />

        <AboutContent />

      </div>

    </Section>
  );
}