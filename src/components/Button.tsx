// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string; 
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  icon,
}) => {
  // Base classes for all buttons
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-500 ease-in-out focus:outline-none py-[21px] px-[32px] cursor-pointer border text-[14px] font-plus-jakarta";

  // Variant-specific classes
  const variantClasses = {
    primary:
      "bg-white border text-[#072C59] hover:bg-[#072C59] hover:text-white",
    secondary:
      "bg-[#072C59] text-white hover:bg-transparent border-transparent hover:text-[#072C59] hover:border-[#072C59] px-[37px]",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border bg-transparent",
  };

  // Size-specific classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Disabled state classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combine all classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button
      className={combinedClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
