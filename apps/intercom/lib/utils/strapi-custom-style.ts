import { GridConfigType, TypeGradient } from "../types/common";

export const gradientHash: Record<TypeGradient, string> = {
  type_one: "bg-[linear-gradient(135deg,#f3f9ff_0%,#c4e0fd_100%)]",
  type_two: "bg-[linear-gradient(to_bottom_right,#effbfe_100%,#caf0f8_100%)]",
  type_three: "bg-[linear-gradient(to_bottom,#fffbf3_0%,#fff1d9_100%)]",
  type_four: "bg-[linear-gradient(to_bottom_right,#fef6f3_100%,#fae3da_100%)]",
};

export const cssGradientHash: Record<TypeGradient, string> = {
  type_one: "linear-gradient(135deg, #f3f9ff 0%, #c4e0fd 100%)",
  type_two: "linear-gradient(to bottom right, #effbfe 0%, #caf0f8 100%)",
  type_three:
    "linear-gradient(to bottom, #ffedd5 0%, #fffbf3 100%, #fff1d9 100%)",
  type_four: "linear-gradient(to bottom right, #fef6f3 0%, #fae3da 100%)",
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
  1: "col-span-1 lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:h-full  lg:w-full lg:row-span-2",
  2: "col-span-1 lg:col-start-1 lg:col-span-3 lg:row-start-3 lg:h-full  lg:w-full lg:row-span-2 flex flex-col-reverse",
  3: "col-span-1 lg:col-start-4 lg:col-span-3 lg:row-start-3 lg:h-full  lg:w-full lg:row-span-2 flex flex-col-reverse",
  4: "col-span-1 lg:col-start-7 lg:col-span-3 lg:row-start-3 lg:h-full  lg:w-full lg:row-span-2 flex flex-col-reverse",
  5: "col-span-1 lg:col-start-10 lg:col-span-3 lg:row-start-3 lg:h-full lg:w-full lg:row-span-2 flex flex-col-reverse",
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
