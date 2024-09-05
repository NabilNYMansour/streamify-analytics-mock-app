import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    'main': [
      "#fff0e4",
      "#ffe0cf",
      "#fac0a1",
      "#f69e6e",
      "#f28043",
      "#f06d27",
      "#f06418",
      "#d6530c",
      "#bf4906",
      "#a73c00"
    ],
  },

  primaryColor: "main",
  primaryShade: { light: 9, dark: 8 },

  defaultRadius: "md",
});
