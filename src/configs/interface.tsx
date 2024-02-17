import { ITranslationKeys } from "assets";

export type IAppLanguage = "en" | "fr";
export interface IPageArgs {
  t: (key: ITranslationKeys) => string;
}

export type IColor =
  | "primary"
  | "secondary"
  | "black"
  | "success"
  | "redLight300"
  | "primaryLighter"
  | "red"
  | "normal"
  | "grey800"
  | "grey200"
  | "grey3"
  | "transparent"
  | "white"
  | "primaryLight"
  | "borderGrey"
  | "drawerBorder"
  | "border"
  | "backdrop"
  | "grey-dark"
  | "grey-light"
  | "timeBg";
