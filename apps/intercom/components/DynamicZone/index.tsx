import Feature from "../Feature";
import Hero from "../Hero";
import Footer from "../Layout/footer";
import Navbar from "../Layout/navbar";

interface DynamicZoneProps {
  data: any;
}

const DynamicZone = ({ sections }: DynamicZoneProps) => {
  switch (sections.__component) {
    case "layout.hero":
      return <Hero data={sections} />;
    case "layout.feature":
      return <Feature data={sections} />;
    case "layout.footer":
      return <Footer data={sections} />;
    case "layout.navbar":
      return <Navbar data={sections} />;
    default:
      return (
        <section className="flex items-center justify-center">
          <p>...LOADING</p>
        </section>
      );
  }
};

export default DynamicZone;
