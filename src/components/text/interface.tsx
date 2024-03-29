import { IColor } from "@/src/configs";

export interface ITextProps {
  text?: string;
  bgColor?: IColor;
  color?: IColor;
  variant?: "large" | "xLarge" | "normal" | "small" | "xxLarge" | "mega" | "xsmall";
  className?: string;
  style?: React.CSSProperties | undefined;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  type?: "normal" | "link" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  onClick?: (arg?: any) => any;
}
