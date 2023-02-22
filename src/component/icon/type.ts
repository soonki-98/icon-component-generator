import { HTMLAttributes } from "react";

export type IconProps = {
  size?: number | string;
  title?: string;
  desc?: string;
  titleId?: string;
  descId?: string;
} & HTMLAttributes<HTMLOrSVGElement>;
