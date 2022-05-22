import { css } from "@emotion/css";
import { body1, body2 } from "@styles/typography";
import { primary, smoke } from "@styles/variables/colors";

export const styGreetingContainer = css`
  margin-bottom: 24px;
  padding: 0 12px;

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

export const styTransactionFilter = css`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  border: 1px solid ${smoke};

  .transaction-search {
    width: 65%;
    border: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .sort-methods {
    width: 35%;
    border: none;
    border-left: 1px solid ${smoke};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export const styTransactionList = css`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
