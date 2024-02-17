import React, { ChangeEvent } from "react";

import { Text } from "..";

import { IDropdownProps } from "./interface";
import { on } from "events";

const Dropdown: React.FC<IDropdownProps> = ({
  className,
  error,
  data = [],
  placeholder,
  labelSize = "14px",
  label,
  disabledOptions = [],
  value,
  onChange
}) => {
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (onChange) {
      onChange(selectedValue); // Call the onChange function with the selected value
    }
  }
  return (
    <div
      className={`flex flex-col  justify-start align-start w-full  ${className}`}
    >
      <Text
        variant="small"
        className={`!text-[${labelSize}] capitalize !mb-[3px]`}
        color="primary"
        text={label}
      />
      <select
        name=""
        id=""
        className={`flex justify-between items-center md:px-[16px] px-[21.5px] py-1 text-grey3 border-grey3 border-[1px] rounded-lg bg-transparent text-[13px] flex-wrap h-10 gap-2  overflow-x-auto`}
        value={value}
        onChange={handleSelectChange}
      >
        <option value="">Select</option>
        {data.map((optionText, index) => (
          <option
            key={index}
            value={optionText}
            className="!mb-0 sm:text-[12px] xl:text-[14px] "
            disabled={disabledOptions.includes(index)}
          >
            {optionText}
          </option>
        ))}
      </select>
      {error && (
        <Text
          variant="small"
          className="text-[12px] !text-red pl-[29px]"
          text={error}
        />
      )}
    </div>
  );
};

export default Dropdown;
