import React from "react";
export interface ICheckBoxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Set input's check state.
   */
  checked?: boolean;
  /**
   * Handle input's value.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Set input's error message.
   */
  error?: string;
  /**
   * Set record's id.
   */
  id?: string;
  toggleId?: any;

  // toggleId?: (id: string) => void;
}

export interface IcheckboxTextProps {
  text: string;
}
