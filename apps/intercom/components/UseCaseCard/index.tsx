import Image from "next/image";
import path from "path";
import { Theme, UseCase } from "../../lib/types/common";
import { cssGradientHash, gridHash } from "../../lib/utils/strapi-custom-style";
import Text from "../ui/Text";

interface UseCaseCardProps {
  useCase: UseCase;
  idx: number;
  theme: Theme;
  featureIndex: number;
}

const UseCaseCard = ({
  useCase,
  idx,
  theme,
  featureIndex,
}: UseCaseCardProps) => {
  const gridClass = gridHash[theme.gridDistribution][idx];
  const isFlex = gridClass!.includes("lg:flex");
  const gradient = `${cssGradientHash[theme.blurColor]}`;

  return (
    <div
      key={idx}
      style={{
        background: theme.themeBG === "dark" ? "#223140" : gradient,
      }}
      className={`relative rounded-2xl h-88 lg:h-auto shadow-lg overflow-hidden
        w-2/3 aspect-square lg:aspect-auto  ${gridHash[theme.gridDistribution][idx]}`}
    >
      {isFlex ? (
        <div className="flex flex-col items-start lg:flex-row h-full w-full items-center gap-4">
          <div className="p-4 flex flex-col justify-start lg:w-1/2 lg:h-full shrink-0 z-10">
            <Text as="heading_four" className="text-start" variant="primary">
              {useCase.headLine}
            </Text>
            <Text as="paragraph" className="text-start" variant="secondary">
              {useCase.subLine}
            </Text>
          </div>
          <div className="relative flex-1 min-h-[160px] lg:min-h-0 h-full w-full">
            <Image
              className={`${"absolute bottom-0 right-0"} object-contain max-h-[80%] w-auto`}
              src={`/strapi-images/${path.basename(useCase.imageCase.url)}`}
              alt="demo"
              width={useCase.imageCase.width}
              height={useCase.imageCase.height}
              priority
            />
          </div>
        </div>
      ) : (
        <div
          className={`${idx > 1 && theme.blurColor === "type_four" ? "flex flex-col-reverse" : "flex flex-col  h-full w-full"}`}
        >
          <div
            className={`${idx > 1 && theme.blurColor === "type_four" ? "m-8 h-58 space-y-4 z-10" : "m-6 z-10"}`}
          >
            <Text as="heading_four" className="text-start" variant="primary">
              {useCase.headLine}
            </Text>
            <Text as="paragraph" className="text-start" variant="secondary">
              {useCase.subLine}
            </Text>
          </div>
          <div
            className={` ${idx > 1 && theme.blurColor === "type_four" ? "flex items-center h-4 ml-8 mt-5" : "relative flex-1 min-h-0"}`}
          >
            <Image
              className={` ${idx > 1 && theme.blurColor === "type_four" ? " " : "absolute bottom-0 object-contain max-h-full w-auto"} ${featureIndex === 2 && idx === 0 ? "left-0 rounded-tr-2xl" : "right-0 rounded-tl-2xl"} `}
              src={`/strapi-images/${path.basename(useCase.imageCase.url)}`}
              alt="demo"
              width={useCase.imageCase.width}
              height={useCase.imageCase.height}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UseCaseCard;
