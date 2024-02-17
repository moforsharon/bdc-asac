import React from "react";

import { Text } from "..";

import { IPasswordInputProps } from "./interface";

const PasswordInput: React.FC<IPasswordInputProps> = ({
  label,
  placeholder,
  labelSize= "14px",
  className,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label className={`transition gap-1 flex flex-col w-full ${className}`}>
      <Text
        variant="small"
        className={`!text-[${labelSize}]`}
        color="primary"
        text={label}
      />
      <div
        className={`h-10 flex justify-between items-center border-grey3 border-[1px] rounded-lg  pl-2 pr-1`}
      >
        <input
          type={showPassword ? "text" : "password"}
          {...rest}
          className={
            "h-100 outline-none border-none w-5/6 text-[13px] bg-transparent"
          }
          placeholder={placeholder}
        />
        <div
          onClick={handleTogglePassword}
          className="w-auto cursor-pointer flex items-center justify-center"
        >
          {showPassword ? (
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M10 0C5.99636 0 2.30209 2.12706 0.0818926 5.69779C-0.0272975 5.89291 -0.0272975 6.12691 0.0818926 6.32203C2.30209 9.87325 5.99636 12 10 12C14.0036 12 17.6979 9.87332 19.9181 6.30259C20.0273 6.10747 20.0273 5.87309 19.9181 5.67797C17.6979 2.12675 14.0036 0 10 0ZM10 1.13186C11.0009 1.13186 11.9836 1.2878 12.9299 1.56098H12.948C13.7669 2.41951 14.2219 3.57066 14.2219 4.79992C14.2219 7.29748 12.3294 9.32698 10 9.32698C7.67061 9.32698 5.77812 7.29748 5.77812 4.79992C5.77812 3.57066 6.23308 2.4 7.05201 1.56098C7.99832 1.26829 8.98089 1.13186 10 1.13186ZM14.5858 2.20503C16.2601 3.04405 17.7342 4.33194 18.8443 5.99047C16.8243 9.0734 13.5305 10.9074 10 10.9074C6.46952 10.9074 3.17576 9.09283 1.13754 6.00991C2.24764 4.35137 3.7033 3.06349 5.37755 2.22447C4.95898 2.98544 4.72248 3.84383 4.72248 4.79992C4.72248 7.90236 7.08833 10.439 9.98187 10.439C12.8754 10.439 15.2413 7.90236 15.2413 4.79992C15.2413 3.84383 15.0044 2.98552 14.5858 2.20503ZM10 2.98552C9.87261 2.98552 9.7453 3.00488 9.61791 3.02439C9.6361 3.12195 9.65416 3.21951 9.65416 3.31707C9.65416 3.92195 9.06415 4 8.5 4C8.40901 4 8.43501 4.40976 8.34402 4.39024C8.30762 4.52683 8.30741 4.66334 8.30741 4.79992C8.28921 5.83407 9.05369 6.65358 10 6.65358C10.9463 6.65358 11.7107 5.83437 11.7107 4.81974C11.7107 3.80511 10.9463 2.98552 10 2.98552Z"
                fill="#1F1E1E"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="b1b827b2-6e2f-4bb0-9bb5-59c48152853f"
                data-name="Vector"
                d="M10,0A11.7,11.7,0,0,0,.08,5.7a.62.62,0,0,0,0,.62A11.73,11.73,0,0,0,10,12a11.7,11.7,0,0,0,9.92-5.7.62.62,0,0,0,0-.62A11.73,11.73,0,0,0,10,0Zm0,1.13a10.7,10.7,0,0,1,2.93.43h0A4.66,4.66,0,0,1,14.22,4.8,4.38,4.38,0,0,1,10,9.33,4.38,4.38,0,0,1,5.78,4.8,4.63,4.63,0,0,1,7.05,1.56,10,10,0,0,1,10,1.13Zm4.59,1.08A11,11,0,0,1,18.84,6,10.6,10.6,0,0,1,10,10.91,10.64,10.64,0,0,1,1.14,6,11.06,11.06,0,0,1,5.38,2.22,5.29,5.29,0,0,0,4.72,4.8,5.48,5.48,0,0,0,10,10.44,5.47,5.47,0,0,0,15.24,4.8,5.46,5.46,0,0,0,14.59,2.21ZM10,3a2.43,2.43,0,0,0-.38,0,1.53,1.53,0,0,1,0,.3c0,.6-.59.68-1.15.68-.09,0-.06.41-.16.39a1.89,1.89,0,0,0,0,.41A1.75,1.75,0,0,0,10,6.65a1.77,1.77,0,0,0,1.71-1.83A1.77,1.77,0,0,0,10,3Z"
                transform="translate(0)"
                fill="#1F1E1E"
              />
              <line
                x1="0.78"
                y1="0.83"
                x2="19.24"
                y2="10.83"
                fill="#1F1E1E"
                stroke="#1F1E1E"
                strokeMiterlimit="10"
              />
            </svg>
          )}
        </div>
      </div>
      {error && (
        <Text
          variant="small"
          className="text-[12px] !text-red pl-[29px]"
          text={error}
        />
      )}
    </label>
  );
};

export default PasswordInput;
