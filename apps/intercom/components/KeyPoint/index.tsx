import { FaCheckCircle } from "@workspace/ui/lib";
import { KeyPoint as KeyPointType } from "../../lib/types/common";
import Text from "../ui/Text";
interface KeyPointProps {
  point: KeyPointType;
}

const KeyPoint = ({ point }: KeyPointProps) => {
  return (
    <div className="flex gap-2 items-center">
      <FaCheckCircle className={`w-6 h-6 text-[#00B4D8]`} />

      <Text as="label" className="text-xl" variant="secondary">
        {point.text}
      </Text>
    </div>
  );
};

export default KeyPoint;
