import { css } from "@emotion/css";

export const styLoader = css`
  width: 100%;
  height: calc(100vh - 24px);
  position: relative;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
`;
