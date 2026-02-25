import { GridConfigType, TypeGradient } from "../types/common";

export const gradientHash: Record<TypeGradient, string> = {
  type_one: "bg-[linear-gradient(135deg,#f0f7ff_0%,#dbeafe_100%)]",
  type_two: "bg-[linear-gradient(to_bottom_right,#eef2f7_0%,#ffffff_100%)]",
  type_three:
    "bg-[linear-gradient(to_bottom,#ffedd5_0%,#fff7ed_50%,#ffffff_100%)]",
  type_four: "bg-[linear-gradient(to_bottom_right,#f8fafc_0%,#ffffff_100%)]",
};

export const glowHash: Record<TypeGradient, string> = {
  type_one:
    "bg-[radial-gradient(circle,#60a5fa_0%,#bfdbfe_50%,transparent_100%)]",
  type_two:
    "bg-[radial-gradient(circle,#94a3b8_0%,#cbd5e1_40%,transparent_100%)]",
  type_three:
    "bg-[radial-gradient(circle,#fed7aa_0%,#ffedd5_40%,transparent_100%)]",
  type_four:
    "bg-[radial-gradient(circle,#7dd3fc_0%,#e0f2fe_50%,transparent_100%)]",
};

export const gridConfigTwo: Record<number, string> = {
  0: "col-span-1 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:h-full lg:w-full lg:row-span-2",
  1: "col-span-1 lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:h-full lg:w-full lg:flex ",
  2: "col-span-1 lg:col-start-7 lg:col-span-6 lg:row-start-2 lg:h-full lg:w-full lg:flex ",
  3: "col-span-1 lg:col-start-1 lg:col-span-4 lg:row-start-3 lg:h-full lg:w-full lg:row-span-2 ",
  4: "col-span-1 lg:col-start-5 lg:col-span-4 lg:row-start-3 lg:h-full lg:w-full lg:row-span-2 ",
  5: "col-span-1 lg:col-start-9 lg:col-span-4 lg:row-start-3 lg:h-full lg:w-full lg:row-span-2 ",
};
export const gridConfigTree: Record<number, string> = {
  0: "col-span-1 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:h-full lg:w-full lg:row-span-2",
  1: "col-span-1 lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:h-full lg:w-full lg:row-span-2 ",
  2: "col-span-1 lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:h-full lg:w-full lg:row-span-2 ",
  3: "col-span-1 lg:col-start-1 lg:col-span-6 lg:row-start-3 lg:h-full lg:w-full lg:flex ",
  4: "col-span-1 lg:col-start-1 lg:col-span-6 lg:row-start-4 lg:h-full lg:w-full lg:flex ",
  5: "col-span-1 lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:h-full lg:w-full lg:row-span-2 ",
};
export const gridConfigFour: Record<number, string> = {
  0: "col-span-1 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:h-full  lg:w-full lg:row-span-2",
  1: "col-span-1 lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:h-full  lg:w-full lg:row-span-2 ",
  2: "col-span-1 lg:col-start-1 lg:col-span-3 lg:row-start-3 lg:h-full  lg:w-full lg:row-span-2 ",
  3: "col-span-1 lg:col-start-4 lg:col-span-3 lg:row-start-3 lg:h-full  lg:w-full lg:row-span-2 lg:flex ",
  4: "col-span-1 lg:col-start-7 lg:col-span-3 lg:row-start-3 lg:h-full  lg:w-full lg:row-span-2 lg:flex ",
  5: "col-span-1 lg:col-start-10 lg:col-span-3 lg:row-start-3 lg:h-full lg:w-full  lg:row-span-2 ",
};

export const gridConfigOne: Record<number, string> = {
  0: "col-span-1 lg:col-span-6 lg:row-span-2 lg:h-full lg:w-full",
  1: "col-span-1 lg:col-span-6 lg:row-span-2 lg:h-full lg:w-full",
  2: "col-span-1 lg:col-span-4 lg:row-span-2 lg:h-full lg:w-full",
  3: "col-span-1 lg:col-span-4 lg:row-span-2 lg:h-full lg:w-full",
  4: "col-span-1 lg:col-span-4 lg:row-span-2 lg:h-full lg:w-full",
};

export const gridHash: Record<GridConfigType, Record<number, string>> = {
  "five|two|tree": gridConfigOne,
  "six|two|tree": gridConfigTwo,
  "tree|two|six": gridConfigTree,
  "six|two|four": gridConfigFour,
};
