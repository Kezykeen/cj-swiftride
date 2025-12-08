import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "../types/cardVariants.ts";

interface CardProps extends VariantProps<typeof cardVariants> {
  image: string;
  header: string;
  message: string;
}

// how it works card
export function HowItWorksCard({
  image,
  header,
  message,
  size,
  color,
}: CardProps) {
  return (
    <div className={cardVariants({ size, color })}>
      <div className="flex justify-center items-center rounded-full bg-white w-[70px] h-[70px]">
        <img src={image} alt="" className="rounded-lg mb-3 " />
      </div>
      <h3 className="font-semibold text-[20px]">{header}</h3>
      <p className="font-light text-[18px] text-gray-600">{message}</p>
    </div>
  );
}
