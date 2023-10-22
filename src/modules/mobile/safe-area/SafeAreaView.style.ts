import { css } from '@emotion/react';

export const safeAreaViewStyle = css`
  padding-top: env(safe-area-inset-top); /* iOS safe area */
  padding-bottom: env(safe-area-inset-bottom); /* iOS safe area */
  padding-left: env(safe-area-inset-left); /* iOS safe area */
  padding-right: env(safe-area-inset-right); /* iOS safe area */

  padding-top: constant(safe-area-inset-top); /* Android safe area */
  padding-bottom: constant(safe-area-inset-bottom); /* Android safe area */
  padding-left: constant(safe-area-inset-left); /* Android safe area */
  padding-right: constant(safe-area-inset-right); /* Android safe area */
`;
