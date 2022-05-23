import { css } from "@emotion/css";
import { body2 } from "@styles/typography";
import { primary, success } from "@styles/variables/colors";

export const styTransactionWrapper = css`
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
  cursor: pointer;

  > .content {
    padding: 16px;
    border-left: 4px solid ${primary};
    display: grid;
    grid: auto / 1fr auto;
    align-items: center;

    &[data-success] {
      border-left: 4px solid ${success};
    }

    .transaction-detail {
      ${body2};

      h2 {
        text-transform: uppercase;
        font-weight: bold;
      }

      p {
        text-transform: uppercase;
      }
    }
  }
`;
