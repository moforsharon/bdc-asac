import React from "react";
export interface ICustomInputProps {
  /**
   * Set input's label.
   */
  placeholder: string;
  label: string;
  labelSize: string;
  type?: string;
  value?: any
  /**
   * Set input's error message.
   */
  pinInput?: boolean;
  error?: string;
  className?: string;
  icon?: React.JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
