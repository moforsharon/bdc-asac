import React, { ChangeEvent } from "react";

import { Text } from "..";

import { ICustomInputProps } from "./interface";
import { on } from "events";

const CustomInput: React.FC<ICustomInputProps> = ({
  placeholder,
  className,
  error,
  icon,
  label,
  labelSize,
  type,
  value,
  onChange,
  ...rest
}) => {
  const flex = placeholder.length > 0 ? "justify-between" : "justify-center";

  return (
    <label
      className={`transition gap-0 flex ${flex} flex-col
       bg-transparent  w-full ${className}`}
    >
        <Text
          variant="small"
          className={`!text-[${labelSize}]  !mb-[3px]`}
          color="timeBg"
          text={label}
        />
      <span className="h-8 flex justify-between items-center border-grey-dark border-[1px] rounded-lg  pl-2 pr-1">
        <input
          {...rest}
          placeholder={placeholder}
          className={`bg-transparent flex outline-none
          placeholder:text-grey-dark  border-transparent 
          h-7 text-grey-dark w-full
          text-[11px] pl-1.5 `}
          type={type}
          onChange={onChange}
          value={value}
        />
        <span className="scale-110">{icon}</span>
      </span>
      {error && (
        <Text variant="small" className="text-[10px] !text-red pl-1 " text={error} />
      )}
    </label>
  );
};

export default CustomInput;
