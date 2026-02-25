import React from "react";
import { AsCta, Variant } from "../../../lib/types/common";

interface CTAProps {
  as: AsCta;
  variant: Variant;
  children: React.ReactNode;
}

export const variants = {
  primary:
    "text-primary  hover:transform-gpu scale-110 transition-transform duration-300",
  secondary:
    "text-secondary  hover:transform-gpu scale-110 transition-transform duration-300",
  tertiary:
    "text-tertiary  hover:transform-gpu scale-110 transition-transform duration-300",
};

const CTAButton = ({ as, variant, children }: CTAProps) => {
  switch (as) {
    case "button":
      return (
        <button
          className={`${variants[variant]} text-xs font-semibold hover:bg-[#0057FF] hover:border-0 rounded-4xl border-2  py-2 px-4`}
        >
          {children}
        </button>
      );
    case "link":
      return <a className={`${variants[variant]}`}>{children}</a>;
    default:
      return <p className={`${variants[variant]}`}>{children}</p>;
  }
};

export default CTAButton;
