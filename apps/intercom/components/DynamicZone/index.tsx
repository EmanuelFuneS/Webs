import { FeatureSection, HeroSection, Sections } from "../../lib/types/common";
import Feature from "../Feature";
import Hero from "../Hero";

interface DynamicZoneProps {
  section: Sections;
  index: number;
}

const DynamicZone = ({ section, index }: DynamicZoneProps) => {
  switch (section.__component) {
    case "sections.hero":
      return <Hero data={section as unknown as Sections as HeroSection} />;
    case "sections.feature":
      return (
        <Feature
          data={section as unknown as Sections as FeatureSection}
          featureIndex={index}
        />
      );
    /* case "sections.footer":
      return <Footer data={sections} />; */
    /* case "sections.navbar":
      return <Navbar data={sections} />; */
    default:
      return (
        <section className="flex items-center justify-center">
          <p>...LOADING</p>
        </section>
      );
  }
};

export default DynamicZone;
