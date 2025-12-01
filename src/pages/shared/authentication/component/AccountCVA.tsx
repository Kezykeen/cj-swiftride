import { cva, type VariantProps } from "class-variance-authority";

// default styling variant
export const accountCardVariants = cva(
  "relative rounded-2xl p-8 pt-[67px] overflow-hidden w-full max-w-[510px] shadow-xl font-plus-jakarta bg-white mx-auto"
);

// icon container styling variants
export const iconContainerVariants = cva(
  "relative z-10 rounded-xl flex items-center justify-center mb-[16px] bg-white shadow-md p-[13px] w-[50px]"
);

// icon styling variants
export const iconVariants = cva("", {
  variants: {
    size: {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-[20px] h-[20px]",
    },
    color: {
      dark: "text-gray-800",
      primary: "text-blue-600",
      secondary: "text-gray-600",
    },
  },
  defaultVariants: {
    size: "lg",
    color: "dark",
  },
});

// header styling variants
export const headerVariants = cva("font-bold mb-[10px] text-[#3D3D3D]", {
  variants: {
    size: {
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-[24px]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

// subtitle stying variants
export const subtitleVariants = cva("leading-relaxed text-[#747474]", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-[14px]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export type AccountCardVariants = VariantProps<typeof accountCardVariants>;
export type IconContainerVariants = VariantProps<typeof iconContainerVariants>;
export type IconVariants = VariantProps<typeof iconVariants>;
export type HeaderVariants = VariantProps<typeof headerVariants>;
export type SubtitleVariants = VariantProps<typeof subtitleVariants>;
