import Image from "next/image";
import path from "path";
import { CTA, Link, NavbarSection } from "../../lib/types/common";
import CTAButton from "../ui/CTA";
import Text from "../ui/Text";

interface NavBarProps {
  data: NavbarSection;
}

const NavBar = ({ data }: NavBarProps) => {
  return (
    <header className="h-20 flex items-center justify-between w-full">
      <div>
        <Image
          src={`/strapi-images/${path.basename(data.logo.url)}`}
          alt="sponsor"
          width={data.logo.width}
          height={data.logo.height}
          priority
        />
      </div>
      <div className="flex space-x-4">
        {data.links.map((link: Link, idx: number) => (
          <Text key={idx}>{link.text}</Text>
        ))}
      </div>
      <div className="space-x-4">
        {data.ctas.map((cta: CTA, idx: number) => (
          <CTAButton key={idx} as={cta.as} variant={cta.variant}>
            {cta.text}
          </CTAButton>
        ))}
      </div>
    </header>
  );
};

export default NavBar;
