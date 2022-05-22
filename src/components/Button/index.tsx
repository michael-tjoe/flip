import React, { ReactNode } from "react";
import noop from "@utils/noop";
import { styButton } from "./styles";

export interface ButtonProps {
  block?: boolean;
  children: ReactNode;
  primary?: boolean;
  success?: boolean;
  ghost?: boolean;
  className?: string;
  onClick?: () => void;
}

function Button({
  block = false,
  children,
  primary,
  ghost,
  success,
  className,
  onClick = noop,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styButton} ${className}`}
      onClick={onClick}
      {...(ghost && { "data-ghost": true })}
      {...(success && { "data-success": true })}
      {...(primary && { "data-primary": true })}
      {...(block && { "data-block": true })}
    >
      {children}
    </button>
  );
}

export default Button;
