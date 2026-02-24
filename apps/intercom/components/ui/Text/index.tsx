import React from "react";
import { AS, Variant } from "../../../lib/types/common";

interface TextProps {
  as?: AS;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

export const variants = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const Text = ({ as, variant, className, children }: TextProps) => {
  switch (as) {
    case "heading_one":
      return (
        <h1
          className={`${variant && variants[variant]} ${className} text-6xl font-light`}
        >
          {children}
        </h1>
      );
    case "heading_two":
      return (
        <h2 className={`${variant && variants[variant]} ${className}`}>
          {children}
        </h2>
      );
    case "heading_three":
      return (
        <h3 className={`${variant && variants[variant]} ${className}`}>
          {children}
        </h3>
      );
    case "heading_four":
      return (
        <h4 className={`${variant && variants[variant]} ${className}`}>
          {children}
        </h4>
      );
    case "heading_five":
      return (
        <h5 className={`${variant && variants[variant]} ${className}`}>
          {children}
        </h5>
      );
    case "heading_six":
      return (
        <h6 className={`${variant && variants[variant]} ${className}`}>
          {children}
        </h6>
      );
    case "paragraph":
      return (
        <p
          className={`${variant && variants[variant]} ${className} text-md font-normal`}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={`${variant && variants[variant]} ${className} text-xl font-semibold `}
        >
          {children}
        </span>
      );
    default:
      return (
        <p className={`${variant && variants[variant]} ${className}`}>
          {children}
        </p>
      );
  }
};

export default Text;
