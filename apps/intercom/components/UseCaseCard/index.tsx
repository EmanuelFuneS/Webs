import Image from "next/image";
import path from "path";
import { Theme, UseCase } from "../../lib/types/common";
import { gradientHash, gridHash } from "../../lib/utils/strapi-custom-style";
import Text from "../ui/Text";

interface UseCaseCardProps {
  useCase: UseCase;
  idx: number;
  theme: Theme;
}

const UseCaseCard = ({ useCase, idx, theme }: UseCaseCardProps) => {
  return (
    <div
      key={idx}
      className={`relative p-6 rounded-2xl bg-orange-100 shadow-lg overflow-hidden
         w-1/2
        /* Cuadrado en móvil, natural en desktop */
        aspect-square lg:aspect-auto  ${gridHash[theme.gridDistribution][idx]} ${gradientHash[theme.blurColor]} `}
    >
      <div>
        <Text as="heading_four" className="text-start" variant="primary">
          {useCase.headLine}
        </Text>
        <Text
          as="paragraph"
          className="text-start text-xs mb-4"
          variant="secondary"
        >
          {useCase.subLine}
        </Text>
      </div>
      <div>
        <Image
          className="absolute bottom-0 right-0 object-contain max-h-[80%] w-auto"
          src={`/strapi-images/${path.basename(useCase.imageCase.url)}`}
          alt="demo"
          width={useCase.imageCase.width}
          height={useCase.imageCase.height}
          priority
        />
      </div>
    </div>
  );
};

export default UseCaseCard;
