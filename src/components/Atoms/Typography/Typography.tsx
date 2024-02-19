import clsx from "clsx";
import React from "react";

interface Typographyprops {
  // this would be to select varient of Typography
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "customh5";
  // font is used to specify that what type of font weight needed to user
  font?: "regular" | "semiBold" | "bold" | "medium";
  //this is used to set color of typrography
  color?: "primary" | "secondary" | string;
  //this would help to set custom classname to typography field
  className?: string;
  //children to pass inside the typography
  children?: React.ReactNode | string | number;
  style?: object;
  onSubmit?: any;
  onClick?: any;
  isIcon: boolean;
}

export const Typography = ({
  variant = "div",
  color = "primary",
  className,
  children,
  font = "semiBold",
  onSubmit,
  isIcon,
  style,
  ...props
}: Typographyprops) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  const fontSelect =
    font === "regular"
      ? "font-normal"
      : font === "medium"
      ? "font-medium"
      : font === "bold"
      ? "font-bold"
      : "font-semibold";

  const getVariant = (variant: string) => {
    let classes = "";
    switch (variant) {
      case "h1":
        classes = `text-xxxxxl leading-xxxxxxl `;
        break;
      case "h2":
        classes = `text-xxxxl leading-xxxxxxl `;
        break;
      case "h3":
        classes = `text-xxl leading-xxxxl`;
        break;
      case "h4":
        classes = `text-xl leading-[32px]`;
        break;
      case "h5":
        classes = `text-2xl leading-xxxl`;
        break;
      case "h6":
        classes = `text-medium leading-[26px]`;
        break;
      case "p":
        classes = `text-small leading-xl !text-text-dark`;
        break;
      case "customh5":
        classes = `text-lg leading-[35px] text-light-gray-500`;
        break;
    }
    return classes;
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      {isIcon && (
        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-secondary border-b-transparent border-b-[5px]"></div>
      )}
      <Tag
        className={clsx(getVariant(variant), fontSelect, className)}
        style={{ ...style }}
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
};
