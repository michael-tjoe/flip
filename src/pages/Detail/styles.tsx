import { css } from "@emotion/css";
import { body2 } from "@styles/typography";
import { primary } from "@styles/variables/colors";

export const styTransactionDetailCard = css`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;

  p {
    ${body2};
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const styTransactionInfo = css`
  padding: 16px;
  display: flex;
  column-gap: 24px;
  align-items: start;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;

  .icon {
    position: relative;
    width: 64px;
    height: 64px;
  }

  dl {
    display: flex;
    flex-direction: column;
  }

  dt {
    font-weight: bold;
    text-transform: uppercase;

    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  dt,
  dd {
    ${body2};
  }

  dd {
    text-transform: capitalize;

    &.uppercase {
      text-transform: uppercase;
    }

    &.bold {
      font-weight: bold;

      span {
        font-weight: normal;
      }
    }
  }
`;

export const styCtaWrapper = css`
  > button {
    color: ${primary} !important;
  }
`;
