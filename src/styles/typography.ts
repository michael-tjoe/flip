import { css } from "@emotion/css";
import { mq } from "./mixins";
import { MD } from "./variables/breakpoints";
import { blackPrimary } from "./variables/colors";

export const tagStyle = css`
  color: ${blackPrimary};
  line-height: 24px;
`;

export const tag1 = css`
  ${tagStyle};
  font-size: 28px;

  ${mq(MD)} {
    font-size: 36px;
  }
`;

export const body1 = css`
  ${tagStyle};
  font-size: 20px;
`;

export const body2 = css`
  ${tagStyle};
  font-size: 16px;
`;
