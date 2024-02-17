// import React from "react";

import { Text } from "../..";

import { IButtonProps } from "../interface";

const SecondaryButton = ({
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
        justifyContent: "center",
        alignItems: "center",
        gap: icon ? "10px" : "0px",
        borderRadius: borderRadius,
        ...style
      }}
      className={`rounded-md bg-grey-light shadow p-2 ${className}`}
      onClick={onClick}
    >
     {text && <Text
        text={text}
        className="mb-[0px!important] text-primary"
        // {...textOptions}
        color={"primary"}
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

export default SecondaryButton;
