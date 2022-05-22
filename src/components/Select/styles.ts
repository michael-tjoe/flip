import { css } from "@emotion/css";
import { body2 } from "@styles/typography";

import {
  blackPrimary,
  primary,
  primaryHover,
  smoke,
  white,
} from "@styles/variables/colors";

export const stySelectWrapper = css`
  ${body2};

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${blackPrimary};
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  background-color: ${white};
  border: 1px solid ${smoke};
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  > .selector {
    position: relative;
    width: 100%;
    padding: 8px 12px;

    > .selected-item {
      flex: 1;
      overflow: hidden;
      font-weight: bold;
      text-align: right;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0;
      line-height: 30px;
      transition: all 0.3s;
      user-select: none;
      padding-right: 20px;
    }

    &:hover {
      border-color: ${primaryHover};
      border-right-width: 1px;
    }

    &[data-expand] {
      border-color: ${primaryHover};
      border-right-width: 1px;
      outline: 0;
    }
  }

  > .select-arrow {
    font-size: 14px;
    text-transform: none;
    vertical-align: -0.125em;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 50%;
    right: 11px;
    display: flex;
    align-items: center;
    height: 12px;
    margin-top: -6px;
    color: ${primary};
    line-height: 1;
    text-align: center;
    pointer-events: none;
  }
`;

export const styDropdown = css`
  min-width: 120px;
  width: 100%;
  margin: 0;
  color: ${blackPrimary};
  line-height: 1.5715;
  list-style: none;
  position: absolute;
  z-index: 1050;
  padding: 8px 0;
  overflow: hidden;
  font-size: 14px;
  font-variant: initial;
  background-color: ${white};
  border-radius: 4px;
  outline: none;

  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
    0 9px 28px 8px #0000000d;

  transition: transform 280ms ease-out 0s, opacity 0.16s ease 0s,
    visibility 0.16s ease 0s;

  transform: translateY(-8px);
  opacity: 0;
  visibility: hidden;

  &[data-expand] {
    transform-origin: center top;
    transform: translateY(2px);
    visibility: visible;
    overflow: visible;
    opacity: 1;
  }

  > ul {
    display: flex;
    flex-direction: column;

    > li {
      ${body2};

      display: flex;
      flex-direction: column;
      height: 32px;
      color: #000000d9;
      cursor: pointer;
      transition: background 0.3s ease;

      > button {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: left;
        width: 100%;
        height: 100%;
        padding: 5px 12px;
      }

      &[data-selected] {
        color: ${blackPrimary};
        font-weight: 600;
        background-color: rgba(253, 101, 66, 0.15);
      }

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;
