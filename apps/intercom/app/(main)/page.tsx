import DynamicZone from "../../components/DynamicZone";
import jsonRaw from "../../lib/data/feature-page.json";
import { Sections } from "../../lib/types/common";

const json = jsonRaw as {
  data: {
    sections: Sections[];
  };
};

const data = json.data.sections.filter(
  (section) =>
    section.__component !== "sections.navbar" &&
    section.__component !== "sections.footer",
);
const page = () => {
  return (
    <div className="w-full">
      {data.map((section, idx) => (
        <DynamicZone key={idx} section={section} index={idx} />
      ))}
    </div>
  );
};

export default page;
