import { IColor } from "@/src/configs";

export type IIconName =
  | "leftArrow"
  | "rightArrow"
  | "plus"
  | "phone"
  | "search"
  | "home"
  | "video";

export interface IIconLibrary {
  name: IIconName;
  size?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: IColor;
}
export interface Icon {
  className?:string;
  key?:string|number;
}
