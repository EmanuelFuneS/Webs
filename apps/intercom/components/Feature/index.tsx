import Image from "next/image";
import path from "path";
import { FeatureSection } from "../../lib/types/common";
import { gradientHash } from "../../lib/utils/strapi-custom-style";
import Title from "../Title";
import Text from "../ui/Text";
import UseCaseCard from "../UseCaseCard";

/* import { FaCheckCircle } from "@repo/ui"; */
interface FeatureProps {
  data: FeatureSection;
}

const Feature = ({ data }: FeatureProps) => {
  return (
    <section className="w-full flex justify-center items-center text-center">
      <div className="flex flex-col item-center justify-center p-10">
        <div className="space-y-10">
          <div className="mb-30">
            <Text
              as={data.sectionLabel.as}
              variant={data.sectionLabel.variant}
              className={`${gradientHash[data.theme.blurColor]} py-2 px-4 rounded-2xl`}
            >
              {data.sectionLabel.text}
            </Text>
          </div>
          <Title headLine={data.headLine} theme={data.theme} />
          <Text
            as={data.description.as}
            variant={data.description.variant}
            className="my-10"
          >
            {data.description.text}
          </Text>
        </div>
        <div
          className={`flex items-center justify-center my-10 rounded-lg ${gradientHash[data.theme.blurColor]}`}
        >
          <Image
            src={`/strapi-images/${path.basename(data.demoImages[0]!.url)}`}
            alt="demo"
            width={data.demoImages[0]!.width}
            height={data.demoImages[0]!.height}
            priority
          />
        </div>

        <div className="flex items-center justify-between my-15">
          {data.keyPoints.map((point, idx) => (
            <Text as="label" className="text-xs" variant="tertiary" key={idx}>
              {/* <FaCheckCircle /> */}
              {point.text}
            </Text>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-[repeat(4,170px)] lg:h-auto ">
          {data.useCases.map((useCase, idx) => {
            return (
              <UseCaseCard
                key={idx}
                useCase={useCase}
                idx={idx}
                theme={data.theme}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-center my-20 mx-6">
          {data.testimonials.map((testimonial, idx) => (
            <div key={idx} className="h-40 w-1/2 flex items-center flex-col">
              <div>
                <Text as="heading_four" variant="primary">
                  {testimonial.company}
                </Text>
                <Text as="paragraph" variant="secondary">
                  {testimonial.message}
                </Text>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-100 h-20 w-20 rounded-full m-4 flex items-center justify-center">
                  Img
                </div>
                <div className="flex flex-col text-start">
                  <Text>{testimonial.authorName}</Text>
                  <Text>{testimonial.authorRol}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
