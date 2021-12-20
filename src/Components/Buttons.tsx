import React, { ReactElement } from "react";

type ButtonProps = {
  disabled?: boolean;
  iconStart?: ReactElement;
  iconEnd?: ReactElement;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  href?: string;
};

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const buttonTypes = {
    primary:
      "bg-lightModeDark active:bg-lightModeMid dark:bg-darkModeMid dark:active:bg-darkModeDark dark:hover:bg-darkModeMid dark:text-white disabled:bg-lightModeDisabled dark:disabled:bg-darkModeDisabled",
    secondary:
      "bg-transparent text-black border-2 border-black dark:text-white dark:border-white hover:text-lightModeDark hover:border-lightModeDark dark:hover:text-darkModeLight dark:hover:border-darkModeLight active:text-black active:border-black dark:active:text-white dark:active:border-white disabled:cursor-not-allowed disabled:text-lightModeDisabled disabled:border-lightModeDisabled dark:disabled:text-darkModeDisabled dark:disabled:border-darkModeDisabled",
    tertiary:
      "bg-transparent text-lightModeDark hover:text-lightModeMid active:text-lightModeDark focus:underline disabled:text-lightModeDisabled dark:text-darkModeLight dark:hover:text-darkModeMid dark:active:text-darkModeLight dark:disabled:text-darkModeDisabled disabled:cursor-not-allowed",
  };
  return (
    <button
      onClick={() => (props.onClick ? props.onClick() : null)}
      disabled={props.disabled}
      className={`px-[16px] py-[12px] font-sans text-base  rounded-md text-center ${
        props.type ? buttonTypes[props.type] : buttonTypes["primary"]
      }`}
    >
      {props.href ? (
        <a href={props.href}>
          <div className="flex justify-center">
            {props.iconStart ? (
              <div className="w-8 h-8">{props.iconStart}</div>
            ) : (
              ""
            )}
            <span className="mt-2 ml-2">{props.children}</span>
            {props.iconEnd ? (
              <div className="w-10 h-10">{props.iconEnd}</div>
            ) : (
              ""
            )}
          </div>
        </a>
      ) : (
        <div className="flex justify-center">
          {props.iconStart ? (
            <div className="w-8 h-8">{props.iconStart}</div>
          ) : (
            ""
          )}
          <span className="mt-2 ml-2">{props.children}</span>
          {props.iconEnd ? (
            <div className="w-10 h-10">{props.iconEnd}</div>
          ) : (
            ""
          )}
        </div>
      )}
    </button>
  );
};

type IconButtonProps = {
  disabled?: boolean;
  buttonIcon: ReactElement;
  href?: string;
  onClick?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ ...props }) => {
  return (
    <button
      onClick={() => (props.onClick ? props.onClick() : null)}
      disabled={props.disabled}
      className="rounded-full bg-lightModeDark hover:bg-lightModeMid active:bg-lightModeDark disabled:bg-lightModeDisabled dark:bg-darkModeMid dark:hover:bg-darkModeLight dark:active:bg-darkModeMid dark:disabled:bg-darkModeDisabled text-white disabled:cursor-not-allowed"
    >
      {props.href ? (
        <a href={props.href ? props.href : ""}>
          <div className="w-8 h-8 m-3">{props.buttonIcon}</div>
        </a>
      ) : (
        <div className="w-8 h-8 m-3">{props.buttonIcon}</div>
      )}
    </button>
  );
};
