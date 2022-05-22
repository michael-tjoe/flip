import { css } from "@emotion/css";
import { body2 } from "@styles/typography";

export const styTransactionWrapper = css`
  border-radius: 4px;
  overflow: hidden;
  background-color: white;

  > .content {
    padding: 16px;
    border-left: 4px solid black;
    display: grid;
    grid: auto / 1fr auto;
    align-items: center;

    .transaction-detail {
      ${body2};

      h2 {
        font-weight: bold;
      }
    }
  }
`;
