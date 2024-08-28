import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const logoStyles = cva("flex flex-row font-bold", {
  variants: {
    size: {
      small: "text-2xl space-x-0.5",
      medium: "text-4xl space-x-1",
      large: "text-6xl space-x-2",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const urlStyles = cva(
  "flex items-center justify-center rounded-lg bg-indigo-500 ",
  {
    variants: {
      size: {
        small: "py-0.5 px-2 text-2xl",
        medium: "py-1 px-3 text-4xl",
        large: "py-2 px-4 text-6xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

interface LogoProps extends VariantProps<typeof logoStyles> {}

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <div className={logoStyles({ size })}>
      <p className="text-gray-950">Short</p>
      <div className={urlStyles({ size })}>
        <p className="text-white">URL</p>
      </div>
    </div>
  );
};
