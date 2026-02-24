import { HeroSection } from "../../lib/types/common";
import CTAButton from "../ui/CTA";
import Text from "../ui/Text";

interface HeroProps {
  data: HeroSection;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="bg-[#041527] h-screen text-white">
      <div className="h-full w-full flex flex-col items-center text-center p-16">
        <div>
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
          <div className="h-100"></div>
          {/* <Image src={data.demoImages[0]!.url} alt="demo" /> */}

          <p>TRUSTED BY +25.000 BUSINESSES</p>
          <div className="flex justify-center w-full space-x-10 my-8">
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
