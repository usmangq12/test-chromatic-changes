import type { Preview } from "@storybook/react";
import { allModes } from "./mode";
import "../src/index.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: true,
    viewport: {
      viewports: allModes,
      defaultViewport: allModes.default,
    },
    chromatic: {
      diffThreshold: 0.02,
      autoAcceptChanges: false,
      captureBeyondViewport: false,
      diffIncludeAntiAliasing: false,
      delay: 1000,
      modes: {
        Mobile: allModes.mobile_small,
        Tablet: allModes.tablet,
        Desktop: allModes.default,
      },
    },
  },
};

export default preview;
