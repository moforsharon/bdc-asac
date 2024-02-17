// import React from "react";

import { Text } from "../..";

import { IButtonProps } from "../interface";

const DisabledPrimaryButton = ({
  text,
  textColor = "white",
  style = {},
  className,
  onClick,
  // textOptions,
  variant,
  icon,
  borderRadius = "6px"
}: IButtonProps) => {
  
     return <button
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: icon ? "10px" : "0px",
        borderRadius: borderRadius,
        ...style
      }}
      className={`rounded-md bg-grey-dark shadow px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {text&&<Text
        text={text}
        className="mb-[0px!important]"
        // {...textOptions}
        color={"white"}
        variant={variant}
      />}

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

export default DisabledPrimaryButton;
