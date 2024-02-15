import React from "react";

interface ButtonProps {
  color?: "primary" | "secondary" | "third" | "default";
  size?: "small" | "medium" | "large";
  disable?: boolean;
  label: string;
  onClick?: () => void;
  onSubmit?: () => void;
  style?: object;
  className?: string;
  loading?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  variant?: "standard" | "line";
  icon?: string | any;
  parentBgColor: string;
}

export const Button = ({
  color = "primary",
  variant = "standard",
  size = "medium",
  disable = false,
  label,
  style,
  icon,
  className = "",
  loading = false,
  type = "button",
  parentBgColor,
  ...props
}: ButtonProps) => {
  const sizeValues = {
    small: "h-7 min-w-[353px]",
    medium: "h-8 min-w-[353px]",
    large: "h-10 min-w-[353px]",
  };

  const colorValues = {
    primary:
      variant === "standard"
        ? "bg-background-primary text-text-primary"
        : "text-light-primary-500 hover:text-text-primary",
    secondary:
      variant === "standard"
        ? "bg-background-secondary text-dark-primary-500"
        : "text-light-gray-300 hover:text-text-primary",
    default:
      variant === "standard"
        ? "bg-background-default text-text-primary"
        : "text-text-primary hover:text-text-primary",
    third:
      variant === "standard"
        ? "bg-background-third text-text-primary"
        : "text-text-primary hover:bg-light-primary-default",
  };

  const variantValues = {
    standard: `justify-center p-2 px-3 border border-transparent
    ${
      disable || loading
        ? "bg-light-gray-25 text-light-gray-75"
        : colorValues[color] +
          `${
            color === "default"
              ? " hover:bg-danger-500 hover:text-white"
              : " hover:bg-light-primary-hover hover:text-white"
          }`
    } ${sizeValues[size]}`,
    line: `${
      disable || loading ? "text-dark-secondary-300" : colorValues[color]
    } h-8 min-w-max justify-start`,
  };

  const additionalStyles = ` before:content-[''] before:absolute before:left-0 before:top-0 before:w-0 before:h-0 before:border-t-[20px] before:border-t-[${parentBgColor}] before:border-r-transparent before:border-r-[20px] after:content-['']  after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0 after:border-t-[20px] after:border-t-transparent after:border-r-[20px] after:border-r-[${parentBgColor}]`;

  return (
    <button
      type={type}
      className={`flex items-center relative text-sm ${
        variantValues[variant]
      } ${sizeValues[size]} ${
        disable || loading ? "cursor-not-allowed" : "cursor-pointer"
      } ${icon ? "gap-1" : ""} ${className} ${additionalStyles} `}
      disabled={loading ? true : disable}
      style={{ ...style }}
      {...props}
    >
      {loading ? (
        <div className="flex min-w-min justify-center gap-2">
          <div
            className={`h-6 w-6 animate-spin border ${
              disable ? "border-white" : "border-gray-600"
            }`}
          ></div>
          loading...
        </div>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {label}
        </>
      )}
      <div
        className="absolute left-0 top-0 w-0 h-0 border-t-20 border-b-0 border-r-20 border-transparent"
        style={{ borderColor: "#f06d06" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-0 h-0 border-t-20 border-b-0 border-r-20 border-transparent"
        style={{ borderColor: "#f06d06" }}
      ></div>
      
    </button>
  );
};
