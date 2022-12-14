import { createStitches, ScaleValue } from '@stitches/react';
import type { PropertyValue, CSS } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } =
  createStitches({
    theme: {
      colors: {
        bg: '#F7F8FA',
        bgHover: '#F2F3F6',
        surface: '#ffffff',
        text: '#212124',
        textDisabled: '#ADB1BA',
        textSubdued: '#868B94',
        primary: '#F43F5E',
        primaryHover: '#E11D48',
        primaryDisabled: '#F2F3F6',
        onPrimary: '#ffffff',
        primaryContainer: '#FECDD3',
        primaryContainerHover: '#FDA4AF',
        onPrimaryContainer: '#F43F5E',
      },
      fontSizes: {
        /* Heading fontSize */
        'heading-xs': '0.75rem',
        'heading-sm': '0.875rem',
        'heading-md': '1rem',
        'heading-lg': '1.25rem',
        'heading-xl': '1.5rem',
        'heading-2xl': '1.75rem',
        'heading-3xl': '2rem',
        /* Body fontSize */
        'body-sm': '0.75rem',
        'body-md': '0.875rem',
        'body-lg': '1rem',
        caption: '0.75rem',
      },
      radii: {
        none: '0px',
        full: '9999px',
        xs: '0.125rem' /* 2px */,
        sm: '0.25rem' /* 4px */,
        md: '0.375rem' /* 6px */,
        lg: '0.5rem' /* 8px */,
        xl: '0.75rem' /* 12px */,
        '2xl': '1rem' /* 16px */,
        '3xl': '1.5rem' /* 24px */,
      },
      zIndices: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
      },
    },
    media: {
      tablet: '(min-width: 768px)',
      destkop: '(min-width: 1280px)',
      dark: '(prefers-color-scheme: dark)',
    },
    utils: {
      p: (value: PropertyValue<'padding'>) => ({
        padding: value,
      }),
      px: (value: PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mx: (value: PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      bg: (value: PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      rounded: (value: PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      ring: (value: PropertyValue<'color'>) => ({
        '--ring-width': '1px',
        boxShadow: `inset 0 0 0 calc(var(--ring-width)) ${value}`,
      }),
      ringWidth: (value: PropertyValue<'borderWidth'>) => ({
        '--ring-width': value,
      }),
    },
  });

export type TriprintCSS = CSS<typeof config>;
