import Image from "next/image";
import { FeatureSection } from "../../lib/types/common";
import Text from "../ui/Text";

interface FeatureProps {
  data: FeatureSection;
}

const Feature = ({ data }: FeatureProps) => {
  return (
    <div className="w-full flex justify-center items-center text-center">
      <div className="flex flex-col item-center p-10">
        <div className="space-y-10">
          <Text as={data.sectionLabel.as} variant={data.sectionLabel.variant}>
            {data.sectionLabel.text}
          </Text>
          <Text as={data.headLine.as} variant={data.headLine.variant}>
            {data.headLine.text}
          </Text>
          <Text as={data.description.as} variant={data.description.variant}>
            {data.description.text}
          </Text>
        </div>
        <div className="flex items-center justify-center my-10">
          <Image
            src={data.demoImages[0]!.url}
            alt="demo"
            width={data.demoImages[0]!.width}
            height={data.demoImages[0]!.height}
            priority
          />
        </div>

        <div className="flex items-center">
          {data.keyPoints.map((point, idx) => (
            <span key={idx}>{point.text}</span>
          ))}
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 my-10">
          {data.useCases.map((useCase, idx) => (
            <div key={idx} className="h-40 w-40 bg-orange-100">
              <h2>{useCase.headLine}</h2>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center my-10 mx-6">
          {data.testimonials.map((testimonial, idx) => (
            <div key={idx} className="h-40 w-full">
              <h3>{testimonial.company}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
