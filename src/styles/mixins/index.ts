import { mediaQueryValue } from "../variables/breakpoints";

export const mq = (breakpoint: mediaQueryValue) =>
  `@media(min-width: ${breakpoint})`;
