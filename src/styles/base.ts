import { css } from "@emotion/css";
import { tag1 } from "./typography";
import { MD } from "./variables/breakpoints";

export const styContainer = css`
  padding: 32px 16px;
  margin: 0 auto;
  max-width: ${MD};
`;

export const styRow = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
`;

export const styPageContent = css`
  h1 {
    &.title {
      ${tag1};
      font-weight: 300;
      text-align: center;
      margin-bottom: 32px;
    }
  }
`;
