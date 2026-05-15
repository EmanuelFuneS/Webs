import Image from "next/image";
import path from "path";
import { FooterSection, Image as ImageType } from "../../lib/types/common";
import Text from "../ui/Text";

interface FooterProps {
  data: FooterSection;
  logo: ImageType;
}

const Footer = ({ data, logo }: FooterProps) => {
  return (
    <footer className="bg-[#041527] text-white py-20 w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        <div className="my-10 w-full flex items-center justify-center">
          <Image
            src={`/strapi-images/${path.basename(logo.url)}`}
            alt="Intercom"
            width={logo.width}
            height={logo.height}
            className="brightness-0 invert"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
          <div>
            <Text as="heading_six" className="text-gray-400 uppercase tracking-wider mb-4">
              Features
            </Text>
            <ul className="space-y-3">
              {data.features.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href || "#"}
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Text as="span">{link.text}</Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text as="heading_six" className="text-gray-400 uppercase tracking-wider mb-4">
              Resources
            </Text>
            <ul className="space-y-3">
              {data.resources.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href || "#"}
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Text as="span">{link.text}</Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text as="heading_six" className="text-gray-400 uppercase tracking-wider mb-4">
              Use Cases
            </Text>
            <ul className="space-y-3">
              {data.useCases.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href || "#"}
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Text as="span">{link.text}</Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <Text as="span" className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Intercom. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
