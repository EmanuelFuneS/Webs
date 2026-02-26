import { Text as TextType, Theme } from "../../lib/types/common";
import { glowHash } from "../../lib/utils/strapi-custom-style";
import Text from "../ui/Text";
interface TitleProps {
  headLine: TextType;
  theme: Theme;
}

const Title = ({ headLine, theme }: TitleProps) => {
  return (
    <div className="relative group flex items-center justify-center">
      <div
        className={`absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-40 opacity-60 blur-[100px] -z-10 ${glowHash[theme.blurColor]}`}
      />
      <div className="relative">
        <Text
          as={headLine.as}
          variant={headLine.variant}
          className="mx-auto w-2/3"
        >
          {headLine.text}
        </Text>
      </div>
    </div>
  );
};

export default Title;
