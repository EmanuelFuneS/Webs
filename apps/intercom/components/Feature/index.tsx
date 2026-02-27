import Image from "next/image";
import path from "path";
import { FeatureSection } from "../../lib/types/common";
import { gradientHash } from "../../lib/utils/strapi-custom-style";
import Title from "../Title";
import Text from "../ui/Text";
import UseCaseCard from "../UseCaseCard";

import PointKey from "../KeyPoint";
import Testimonial from "../Testimonial";
interface FeatureProps {
  data: FeatureSection;
  featureIndex: number;
}

const Feature = ({ data, featureIndex }: FeatureProps) => {
  console.log(data.theme.themeBG === "dark");
  return (
    <section
      className={`w-full flex justify-center items-center text-center ${data.theme.themeBG === "dark" ? "bg-[#041527] w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] text-white" : ""}  `}
    >
      <div className="flex flex-col item-center justify-center p-10">
        <div className="space-y-10">
          <div className="">
            <Text
              as={data.sectionLabel.as}
              variant={data.sectionLabel.variant}
              className={`${gradientHash[data.theme.blurColor]} py-2 px-4 rounded-2xl ${data.theme.themeBG === "dark" ? "text-black" : ""}`}
            >
              {data.sectionLabel.text}
            </Text>
          </div>
          <Title headLine={data.headLine} theme={data.theme} />
          <Text
            as={data.description.as}
            variant={data.description.variant}
            className="my-10 mx-auto w-2/3"
          >
            {data.description.text}
          </Text>
        </div>
        <div
          className={`flex items-center justify-center my-10 shadow-2xl rounded-2xl ${gradientHash[data.theme.blurColor]}`}
        >
          <Image
            className="rounded-xl"
            src={`/strapi-images/${path.basename(data.demoImages[0]!.url)}`}
            alt="demo"
            width={data.demoImages[0]!.width}
            height={data.demoImages[0]!.height}
            priority
          />
        </div>

        <div className="flex items-center justify-between my-15">
          {data.keyPoints.map((point, idx) => (
            <PointKey key={idx} point={point} />
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
                featureIndex={featureIndex}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-center my-20 mx-6">
          {data.testimonials.map((testimonial, idx) => (
            <Testimonial key={idx} idx={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
