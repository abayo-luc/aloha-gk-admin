export const darkTheme = {
  palette: {
    primary: {
      main: "#90caf9",
    },
    type: "dark", // Switching the dark mode on is a single property value change.
  },
};

export const lightTheme = {
  palette: {
    primary: {
      main: "#2BAE66FF",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ec7ead",
      main: "#c82f63",
      dark: "#7a1b38",
      contrastText: "#fff",
    },
    background: {
      default: "#fcfcfe",
    },
  },
  shape: {
    borderRadius: 5,
  },
  overrides: {
    RaMenuItemLink: {
      root: {
        borderLeft: "3px solid #fff",
      },
      active: {
        borderLeft: "3px solid #2BAE66FF",
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "none",
      },
      root: {
        border: "1px solid #e0e0e3",
        backgroundClip: "padding-box",
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: "#fff",
        color: "#2BAE66FF",
        boxShadow: "none",
      },
    },
    MuiAppBar: {
      colorSecondary: {
        color: "#808080",
        backgroundColor: "#fff",
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: "#f5f5f5",
      },
      barColorPrimary: {
        backgroundColor: "#d7d7d7",
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        "&$disabled": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      },
    },
  },
};
