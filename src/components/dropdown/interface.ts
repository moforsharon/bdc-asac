import React from "react";
export interface IDropdownProps {
  /**
   * Set input's label.
   */
  placeholder: string;
  label: string;
  labelSize: string;
  /**
   * Set input's error message.
   */
  data?: string[];
  disabledOptions?: number[];

  error?: string;
  className?: string;
  icon?: React.JSX.Element;
  value?: any
  onChange?:(value: string) => void;
}
