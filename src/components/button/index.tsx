import { classNames } from "@/lib/utils/classNames";
import React, { ButtonHTMLAttributes } from "react";
import Icon from "../icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  prefixIcon,
  suffixIcon,
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "rounded-[999px]",
        "font-medium",
        "text-[18px]",
        "flex",
        "gap-2",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </button>
  );
};

export default Button;
