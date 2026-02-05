'use client';

import { createTheme } from '@mui/material/styles';

export const arthajetheme = createTheme({
  palette: {
    primary: {
      main: '#D14D72',
      light: '#FFB6C1',
      dark: '#A03A5A',
    },
    secondary: {
      main: '#F5F5F0',
      dark: '#E5E5E0',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F0',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '12px 32px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(184, 122, 154, 0.15)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(184, 122, 154, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});
