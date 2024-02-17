// import React from "react";

import { IButtonProps } from "./interface";
import PrimaryButton from "./button_types/primary_button";
import SecondaryButton from "./button_types/secondary_button";
import OutlineButton from "./button_types/outline_button";
import DisabledOutlineButton from "./button_types/disabled_outline_button";
import DisabledPrimaryButton from "./button_types/disabled_primary_button";
import DisabledSecondaryButton from "./button_types/disabled_secondary_button";
import OutlinePillButton from "./button_types/outline_pill_button";
import PrimaryPillButton from "./button_types/primary_pill_button";
import SecondaryPillButton from "./button_types/secondary_pill_button";
import DisabledOutlinePillButton from "./button_types/disabled_outline_pill_button";
import DisabledPrimaryPillButton from "./button_types/disabled_primary_pill_button";
import DisabledSecondaryPillButton from "./button_types/disabled_secondary_pill_button";

const Button = ({
  text,
  textColor = "white",
  style = {},
  className,
  onClick,
  textOptions,
  variant,
  icon,
  type,
  borderRadius = "6px"
}: IButtonProps) => {
  
  switch (type) {
    case "primary":
      return <PrimaryButton 
        text={text}
        style = {style}
        className={className}
        onClick={onClick}
        textOptions={textOptions}
        variant={variant}
        icon={icon}
        type={type}
        borderRadius = {borderRadius}
        textColor={textColor}
       />
       break
      case "secondary":
        return <SecondaryButton 
          text={text}
          style = {style}
          className={className}
          onClick={onClick}
          textOptions={textOptions}
          variant={variant}
          icon={icon}
          type={type}
          borderRadius = {borderRadius}
          textColor={textColor}
          />
          break
          case "outline":
            return <OutlineButton 
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "secondary-disabled":
            return <DisabledSecondaryButton 
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "primary-disabled":
            return <DisabledPrimaryButton 
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "outline-disabled":
            return <DisabledOutlineButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "outline-pill":
            return <OutlinePillButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "primary-pill":
            return <PrimaryPillButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "secondary-pill":
            return <SecondaryPillButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "disabled-outline-pill":
            return <DisabledOutlinePillButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "disabled-primary-pill":
            return <DisabledPrimaryPillButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
          case "disabled-secondary-pill":
            return <DisabledSecondaryPillButton
              text={text}
              style = {style}
              className={className}
              onClick={onClick}
              textOptions={textOptions}
              variant={variant}
              icon={icon}
              type={type}
              borderRadius = {borderRadius}
              textColor={textColor}
              />
              break
    
    default:
      break;
  }
};

export default Button;
