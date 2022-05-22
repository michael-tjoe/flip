import { css } from "@emotion/css";
import { body1, body2 } from "@styles/typography";
import { primary } from "@styles/variables/colors";

export const styGreetingContainer = css`
  > p {
    ${body1};
    font-weight: bold;
    margin-bottom: 8px;
  }

  > span {
    ${body2};

    em {
      font-weight: bold;
      color: ${primary};
    }
  }
`;

export const styTransactionList = css`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
