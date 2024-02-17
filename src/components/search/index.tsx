import React from "react";

import { IconLibrary } from "../icons";
import { Text } from "..";

import { ISearchInputProps } from "./interface";

const SearchInput: React.FC<ISearchInputProps> = ({
  label,
  className,
  error,
  ...rest
}) => {
  const flex = label.length > 0 ? "justify-between" : "justify-center";
  return (
    <label
      className={`transition gap-1 flex ${flex} flex-col
       bg-transparent h-[51px] w-[234px] ${className}`}
    >
      {label.length > 0 && (
        <Text
          variant="small"
          className="!text-[11.42px] !m-0 h-[14px] !-mt-1 capitalize"
          color="timeBg"
          text={"search"}
        />
      )}
      <span className="h-12 flex justify-between items-center border-grey-dark border-[1px] rounded-md gap-2 pr-1">
        <input
          {...rest}
          placeholder="Enter search terms"
          className={`bg-transparent flex outline-none
          placeholder:text-grey-dark border-transparent 
          h-full text-grey-dark w-full
          text-[11px] pl-3  `}
        />
        <span className="">
          <IconLibrary name="search" />
        </span>
      </span>
      {error && (
        <Text
          variant="small"
          className="text-[11.42px] !text-red pl-[29px] "
          text={error}
        />
      )}
    </label>
  );
};

export default SearchInput;
