import { ITextProps } from "components/text/interface";
import { IColor } from "configs";

export interface IButtonProps {
  text?: string;
  bgColor?: IColor;
  textColor?: IColor;
  borderColor?: IColor;
  margin?: string;
  className?: string;
  style?: React.CSSProperties | undefined;
  onClick?: (arg?: any) => any;
  textOptions?: ITextProps;
  type?:"primary"|"secondary"|"outline"|"primary-disabled"|"secondary-disabled"|"outline-disabled"|"primary-pill"|"secondary-pill"|"outline-pill"|"disabled-primary-pill"|"disabled-secondary-pill"|"disabled-outline-pill";
  variant?: "large" | "xLarge" | "normal" | "small" | "xxLarge" | "mega" | "xsmall";
  icon?: any;
  borderRadius?: string;
}
