import { createTheme } from '@mui/material/styles';

// Define your color variables
const lightColors = {
  primary: '#3f51b5', // Your light mode primary color
  background: '#fff',   // Your light mode background color
  // Define more colors as needed
};

const darkColors = {
  primary: '#000',     // Your dark mode primary color
  background: '#333',  // Your dark mode background color
  // Define more colors as needed
};

// Create a function to generate the theme based on the mode
const generateTheme = (darkMode) => {
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light', // Toggle theme mode
    },
    // Other theme options like typography, spacing, etc.
    typography: {
      fontFamily: 'Arial, sans-serif',
      allVariants: { color: 'navy' },
    },
    spacing: 8,
  });

  // Override the primary and background colors based on the mode
  if (darkMode) {
    theme.palette.primary.main = darkColors.primary;
    theme.palette.background.default = darkColors.background;
  } else {
    theme.palette.primary.main = lightColors.primary;
    theme.palette.background.default = lightColors.background;
  }

  return theme;
};

export default generateTheme;
