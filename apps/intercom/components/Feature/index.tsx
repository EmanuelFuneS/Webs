import Image from "next/image";
import path from "path";
import { FeatureSection } from "../../lib/types/common";
import Text from "../ui/Text";

interface FeatureProps {
  data: FeatureSection;
}

const Feature = ({ data }: FeatureProps) => {
  return (
    <section className="w-full flex justify-center items-center text-center">
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
            src={`/strapi-images/${path.basename(data.demoImages[0]!.url)}`}
            alt="demo"
            width={data.demoImages[0]!.width}
            height={data.demoImages[0]!.height}
            priority
          />
        </div>

        <div className="flex items-center my-10">
          {data.keyPoints.map((point, idx) => (
            <span key={idx}>{point.text}</span>
          ))}
        </div>

        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center space-x-16">
          {data.useCases.map((useCase, idx) => {
            return (
              <div key={idx} className={`w-60 h-80`}>
                <h2>{useCase.headLine}</h2>
                <p>{useCase.subLine}</p>
                <Image
                  src={`/strapi-images/${path.basename(useCase.imageCase.url)}`}
                  alt="demo"
                  width={useCase.imageCase.width}
                  height={useCase.imageCase.height}
                  priority
                />
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center my-20 mx-6">
          {data.testimonials.map((testimonial, idx) => (
            <div key={idx} className="h-40 w-full">
              <h3>{testimonial.company}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
