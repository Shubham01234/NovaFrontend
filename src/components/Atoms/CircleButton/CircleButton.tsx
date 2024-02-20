import { CircleButtonHover, CircleButtonIcon } from "assets";
import { useState } from "react";
import { Typography } from "../Typography/Typography";

interface CircleButtonProps {
  disable?: boolean;
  onClick?: () => void;
  style?: object;
  className?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  label : string ;
}

export const CircleButton = ({
  disable = false,
  style,
  className = "",
  loading = false,
  type = "button",
  label,
  ...props
}: CircleButtonProps) => {
  const [isHover, setisHover] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button onClick={() => alert("clicked")}>
        <div
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          className="cursor-pointer"
        >
          {!isHover ? (
            <CircleButtonIcon />
          ) : (
            <div className="transition-transform transform-gpu hover:scale-110 duration-300 ease-in-out">
              <CircleButtonHover />
            </div>
          )}
        </div>
      </button>
      <Typography variant="p" font="bold" isIcon={false}>
        {label}
      </Typography>
    </div>
  );
};
