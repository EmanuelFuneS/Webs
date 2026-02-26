import { Sections } from "../../lib/types/common";
import Feature from "../Feature";
import Hero from "../Hero";

interface DynamicZoneProps {
  section: Sections;
  index: number;
}

const DynamicZone = ({ section, index }: DynamicZoneProps) => {
  switch (section.__component) {
    case "sections.hero":
      return <Hero data={section} />;
    case "sections.feature":
      return <Feature data={section} featureIndex={index} />;
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
