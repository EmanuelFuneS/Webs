import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import path from "path";
import { Testimonial as TestimonialType } from "../../lib/types/common";
import Text from "../ui/Text";

interface TestimonialProps {
  idx: number;
  testimonial: TestimonialType;
}

const Testimonial = ({ idx, testimonial }: TestimonialProps) => {
  const message = testimonial.authorMessage as Partial<BlocksContent>;
  return (
    <div key={idx} className="h-40 w-1/2 flex items-center flex-col space-y-4">
      <Image
        src={`/strapi-images/${path.basename(testimonial.companyLogo.url)}`}
        alt="Company Logo"
        width={testimonial.companyLogo.width}
        height={testimonial.companyLogo.height}
      />
      {message.length === 1 && (
        <BlocksRenderer content={message as BlocksContent} />
      )}

      <div className="flex items-center">
        <div className="bg-orange-100 h-20 w-20 rounded-full m-4 flex items-center justify-center">
          <Image
            src={`/strapi-images/${path.basename(testimonial.authorPhoto.url)}`}
            alt="demo"
            width={testimonial.authorPhoto.width}
            height={testimonial.authorPhoto.height}
            priority
          />
        </div>
        <div className="flex flex-col text-start">
          <Text as="label" variant="tertiary">
            {testimonial.authorName}
          </Text>
          <Text as="label" variant="secondary">
            {testimonial.authorRol}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
