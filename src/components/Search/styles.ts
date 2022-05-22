import { css } from "@emotion/css";
import { body2 } from "@styles/typography";
import {
  blackPrimary,
  primaryHover,
  smoke,
  white,
} from "@styles/variables/colors";

export const styInputWrapper = css`
  ${body2};

  display: flex;
  width: 100%;
  overflow: hidden;
  color: ${blackPrimary};
  border: 1px solid ${smoke};
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${white};

  &:focus-within {
    outline: 0;
    border-color: ${primaryHover};
  }

  > input {
    width: 100%;
    border: none;

    &:focus {
      outline: 0;
      border: none;
    }
  }

  > .input-addon {
    display: flex;
    align-items: center;
    margin-right: 8px;

    .icon {
      color: #747474;
      font-style: normal;
      line-height: 1;
    }
  }
`;
