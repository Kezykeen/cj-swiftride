import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "flex flex-col gap-4 text-center justify-center items-center rounded-full p-[50px] shadow",
  {
    variants: {
      size: {
        sm: "w-52",
        md: "w-64",
        lg: "w-[350px] h-[350px]",
      },
      color: {
        white: "bg-white",
        blue: "bg-[#E8F2FF]",
        gray: "bg-gray-900",
      },
    },
    defaultVariants: {
      size: "md",
      color: "white",
    },
  }
);
