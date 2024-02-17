// import React from "react";

import { Text } from "../..";

import { IButtonProps } from "../interface";

const DisabledSecondaryPillButton = ({
  text,
  textColor = "white",
  style = {},
  className,
  onClick,
  // textOptions,
  variant,
  icon,
  // borderRadius = "6px"
}: IButtonProps) => {
  
     return <button
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: icon ? "10px" : "0px",
        // borderRadius: borderRadius,
        ...style
      }}
      className={`rounded-full bg-grey-light shadow px-4 py-2 ${className}`}
      onClick={onClick}
    >
      <Text
        text={text}
        className="mb-[0px!important] text-grey-dark"
        // {...textOptions}
        color={"red"}
        variant={variant}
      />

      <div
        style={{
          color: textColor,
          fontSize: "14px"
        }}
      >
        {icon}
      </div>
    </button>
};

export default DisabledSecondaryPillButton;
