import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Primary colors
      primary: '#1976D2',
      primaryHover: '#1565C0',
      
      // Onboarding colors
      onboardingPrimary: '#64c2c8',
      onboardingBg: '#f0f9fa',
      onboardingAccent: '#286d71',
      onboardingLight: 'rgba(100, 194, 200, 0.2)',
      onboardingLightBorder: 'rgba(100, 194, 200, 0.25)',
      
      // Status colors
      accepted: '#4CAF50',
      acceptedBg: '#E8F5E9',
      acceptedText: '#2E7D32',
      pending: '#FFA726',
      pendingBg: '#FFF3E0',
      pendingText: '#E65100',
      assigned: '#2196F3',
      assignedBg: '#E3F2FD',
      assignedText: '#0D47A1',
      declined: '#EF5350',
      declinedBg: '#FFEBEE',
      declinedText: '#C62828',
      cancelled: '#9E9E9E',
      cancelledBg: '#F5F5F5',
      cancelledText: '#424242',
      
      // Neutral colors
      white: '#FFFFFF',
      gray50: '#FAFAFA',
      gray100: '#F5F5F5',
      gray200: '#EEEEEE',
      gray300: '#E0E0E0',
      gray400: '#BDBDBD',
      gray500: '#9E9E9E',
      gray600: '#757575',
      gray700: '#616161',
      gray800: '#424242',
      gray900: '#212121',
      black: '#000000',
      
      // Background colors
      background: '#FFFFFF',
      backgroundSecondary: '#F5F5F5',
      backgroundTertiary: '#FAFAFA',
      
      // Border colors
      border: '#E0E0E0',
      borderLight: '#EEEEEE',
      errorBorder: '#d32f2f',
      
      // Text colors
      text: '#1d1d1d',
      textSecondary: '#616161',
      textTertiary: '#9E9E9E',
      textPlaceholder: '#989898',
      textError: '#dc1300',
      
      // Specific UI colors
      bookingId: '#589654',
      sidebarBg: '#FFFFFF',
      headerBg: '#FFFFFF',
      inputBg: '#f9f9f9',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      12: '48px',
      16: '64px',
      20: '80px',
      24: '96px',
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
    },
    fonts: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      base: 1.5,
      relaxed: 1.75,
    },
    radii: {
      none: '0',
      sm: '4px',
      base: '6px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    background: '#1a1a1a',
    backgroundSecondary: '#2a2a2a',
    backgroundTertiary: '#333333',
    text: '#FFFFFF',
    textSecondary: '#BDBDBD',
    textTertiary: '#9E9E9E',
    border: '#424242',
    borderLight: '#333333',
    sidebarBg: '#2a2a2a',
    headerBg: '#2a2a2a',
  },
});

