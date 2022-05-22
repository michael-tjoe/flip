import { css } from "@emotion/css";

import {
  blackPrimary,
  smoke,
  white,
  primary,
  primaryHover,
  success,
} from "@styles/variables/colors";

export const styButton = css`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  padding: 4px 16px;
  height: 32px;
  font-size: 14px;
  border-radius: 8px;
  color: ${blackPrimary};
  border-color: ${smoke};
  background-color: ${white};
  justify-content: center;

  &[data-block] {
    width: 100%;
  }

  &[data-primary] {
    color: ${white};
    border-color: ${primary};
    background-color: ${primary};
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b;

    &:hover {
      background-color: ${primaryHover};
      border-color: ${primaryHover};
      color: ${primary};
    }
  }

  &[data-success] {
    color: ${white};
    border-color: ${success};
    background-color: ${success};
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b;
  }

  &[data-ghost] {
    background-color: transparent;
    color: ${blackPrimary};

    &:hover {
      background-color: transparent;
      color: ${blackPrimary};
    }
  }
`;
