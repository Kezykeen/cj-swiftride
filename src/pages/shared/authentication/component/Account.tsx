import {
  accountCardVariants,
  iconContainerVariants,
  iconVariants,
  headerVariants,
  subtitleVariants,
  type IconVariants,
  type HeaderVariants,
  type SubtitleVariants,
} from "../component/AccountCVA";

export const AccountCard = ({
  iconColor,
  headerSize,
  subtitleSize,
  icon,
  header,
  subtitle,
  children,
}: {
  iconColor?: IconVariants["color"];
  headerSize?: HeaderVariants["size"];
  subtitleSize?: SubtitleVariants["size"];
  icon: React.ReactNode;
  header: string;
  subtitle: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={accountCardVariants()}>
      <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-[#157DFF36] to-[#157DFF00] h-[170px]"></div>
      <div className={iconContainerVariants({})}>
        <div className={iconVariants({ color: iconColor })}>{icon}</div>
      </div>

      <h1 className={headerVariants({ size: headerSize })}>{header}</h1>

      <p
        className={subtitleVariants({
          size: subtitleSize,
        })}
      >
        {subtitle}
      </p>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};
