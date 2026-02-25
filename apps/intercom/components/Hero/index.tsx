import Image from "next/image";
import path from "path";
import { HeroSection } from "../../lib/types/common";
import CTAButton from "../ui/CTA";
import Text from "../ui/Text";

interface HeroProps {
  data: HeroSection;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="bg-[#041527] h-auto text-white">
      <div className="h-full w-full flex flex-col items-center text-center pt-10">
        <div className="space-y-10">
          <Text as={data.title.as} variant={data.title.variant}>
            {data.title.text}
          </Text>
          <Text as={data.description.as} variant={data.description.variant}>
            {data.description.text}
          </Text>
        </div>
        <div className="my-6 space-x-6">
          {data.cta.map((cta, idx) => (
            <CTAButton key={idx} as={cta.as} variant={cta.variant}>
              {cta.text}
            </CTAButton>
          ))}
        </div>
        <div className="">
          <Image
            src={`/strapi-images/${path.basename(data.demoImages[0]!.url)}`}
            alt="demo"
            width={data.demoImages[0]!.width}
            height={data.demoImages[0]!.height}
            priority
          />
        </div>
        <div className="my-8">
          <p className="font-semibold">TRUSTED BY +25.000 BUSINESSES</p>
          <div className="flex justify-center w-full space-x-10 my-4">
            {data.sponsors.map((sponsor, idx) => (
              <div key={idx} className="bg-black rounded-xl px-3 py-2">
                <Text as={sponsor.as} variant={sponsor.variant}>
                  {sponsor.text}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
