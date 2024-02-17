import React from "react";

import { ICheckBoxInputProps } from "./interface";

const CheckBoxInput: React.FC<ICheckBoxInputProps> = ({
  onChange,
  id,
  toggleId,
  checked,
  className,
  ...rest
}) => {
  const [value, setValue] = React.useState(false);
  const handleValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.checked);
    // toggleId(id);
  };

  const extraClass = value
    ? " bg-secondary border-secondary text-primary"
    : " border-primary bg-transparent";
  return (
    <label
      htmlFor={id}
      className={`
       w-[19px] h-[19px] rounded-[5px] border
        flex items-center
       justify-center cursor-pointer transition ${extraClass} ${className}`}
    >
      <input
        {...rest}
        id={id}
        placeholder="..."
        type="checkbox"
        onChange={onChange ?? handleValue}
        checked={checked ?? value}
        className={"opacity-0 hidden"}
      />
      {value && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          className="transition scale-75"
        >
          <path
            d="M1.25 7.08594L5.41667 11.1875L12.5 1.61719"
            stroke="white"
            strokeWidth="1.5625"
            strokeLinecap="round"
          />
        </svg>
      )}
    </label>
  );
};

export default CheckBoxInput;
