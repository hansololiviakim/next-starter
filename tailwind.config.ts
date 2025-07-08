import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Vapor UI 색상 변수 통합
      colors: {
        // Primary 색상
        primary: {
          50: 'var(--vapor-color-blue-050)',
          100: 'var(--vapor-color-blue-100)',
          200: 'var(--vapor-color-blue-200)',
          300: 'var(--vapor-color-blue-300)',
          400: 'var(--vapor-color-blue-400)',
          500: 'var(--vapor-color-blue-500)',
          600: 'var(--vapor-color-blue-600)',
          700: 'var(--vapor-color-blue-700)',
          800: 'var(--vapor-color-blue-800)',
          900: 'var(--vapor-color-blue-900)',
        },
        // Success 색상
        success: {
          50: 'var(--vapor-color-green-050)',
          100: 'var(--vapor-color-green-100)',
          200: 'var(--vapor-color-green-200)',
          300: 'var(--vapor-color-green-300)',
          400: 'var(--vapor-color-green-400)',
          500: 'var(--vapor-color-green-500)',
          600: 'var(--vapor-color-green-600)',
          700: 'var(--vapor-color-green-700)',
          800: 'var(--vapor-color-green-800)',
          900: 'var(--vapor-color-green-900)',
        },
        // Warning 색상
        warning: {
          50: 'var(--vapor-color-orange-050)',
          100: 'var(--vapor-color-orange-100)',
          200: 'var(--vapor-color-orange-200)',
          300: 'var(--vapor-color-orange-300)',
          400: 'var(--vapor-color-orange-400)',
          500: 'var(--vapor-color-orange-500)',
          600: 'var(--vapor-color-orange-600)',
          700: 'var(--vapor-color-orange-700)',
          800: 'var(--vapor-color-orange-800)',
          900: 'var(--vapor-color-orange-900)',
        },
        // Danger 색상
        danger: {
          50: 'var(--vapor-color-red-050)',
          100: 'var(--vapor-color-red-100)',
          200: 'var(--vapor-color-red-200)',
          300: 'var(--vapor-color-red-300)',
          400: 'var(--vapor-color-red-400)',
          500: 'var(--vapor-color-red-500)',
          600: 'var(--vapor-color-red-600)',
          700: 'var(--vapor-color-red-700)',
          800: 'var(--vapor-color-red-800)',
          900: 'var(--vapor-color-red-900)',
        },
        // Background 색상
        background: {
          primary: 'var(--vapor-color-background-primary)',
          secondary: 'var(--vapor-color-background-secondary)',
          success: 'var(--vapor-color-background-success)',
          warning: 'var(--vapor-color-background-warning)',
          danger: 'var(--vapor-color-background-danger)',
          hint: 'var(--vapor-color-background-hint)',
          contrast: 'var(--vapor-color-background-contrast)',
          normal: 'var(--vapor-color-background-normal)',
          'normal-lighter': 'var(--vapor-color-background-normal-lighter)',
          'normal-darker': 'var(--vapor-color-background-normal-darker)',
        },
        // Foreground 색상
        foreground: {
          primary: 'var(--vapor-color-foreground-primary)',
          secondary: 'var(--vapor-color-foreground-secondary)',
          success: 'var(--vapor-color-foreground-success)',
          warning: 'var(--vapor-color-foreground-warning)',
          danger: 'var(--vapor-color-foreground-danger)',
          hint: 'var(--vapor-color-foreground-hint)',
          contrast: 'var(--vapor-color-foreground-contrast)',
          accent: 'var(--vapor-color-foreground-accent)',
          normal: 'var(--vapor-color-foreground-normal)',
        },
      },
      // Vapor UI 크기 변수 통합
      spacing: {
        'vapor-000': 'var(--vapor-size-space-000)',
        'vapor-025': 'var(--vapor-size-space-025)',
        'vapor-050': 'var(--vapor-size-space-050)',
        'vapor-075': 'var(--vapor-size-space-075)',
        'vapor-100': 'var(--vapor-size-space-100)',
        'vapor-150': 'var(--vapor-size-space-150)',
        'vapor-175': 'var(--vapor-size-space-175)',
        'vapor-200': 'var(--vapor-size-space-200)',
        'vapor-225': 'var(--vapor-size-space-225)',
        'vapor-250': 'var(--vapor-size-space-250)',
        'vapor-300': 'var(--vapor-size-space-300)',
        'vapor-400': 'var(--vapor-size-space-400)',
        'vapor-500': 'var(--vapor-size-space-500)',
        'vapor-600': 'var(--vapor-size-space-600)',
        'vapor-700': 'var(--vapor-size-space-700)',
        'vapor-800': 'var(--vapor-size-space-800)',
        'vapor-900': 'var(--vapor-size-space-900)',
      },
      borderRadius: {
        'vapor-000': 'var(--vapor-size-borderRadius-000)',
        'vapor-050': 'var(--vapor-size-borderRadius-050)',
        'vapor-100': 'var(--vapor-size-borderRadius-100)',
        'vapor-200': 'var(--vapor-size-borderRadius-200)',
        'vapor-300': 'var(--vapor-size-borderRadius-300)',
        'vapor-400': 'var(--vapor-size-borderRadius-400)',
        'vapor-500': 'var(--vapor-size-borderRadius-500)',
        'vapor-600': 'var(--vapor-size-borderRadius-600)',
        'vapor-700': 'var(--vapor-size-borderRadius-700)',
        'vapor-800': 'var(--vapor-size-borderRadius-800)',
        'vapor-900': 'var(--vapor-size-borderRadius-900)',
      },
      // Vapor UI 타이포그래피 변수 통합
      fontSize: {
        'vapor-025': [
          'var(--vapor-typography-fontSize-025)',
          'var(--vapor-typography-lineHeight-025)',
        ],
        'vapor-050': [
          'var(--vapor-typography-fontSize-050)',
          'var(--vapor-typography-lineHeight-050)',
        ],
        'vapor-075': [
          'var(--vapor-typography-fontSize-075)',
          'var(--vapor-typography-lineHeight-075)',
        ],
        'vapor-100': [
          'var(--vapor-typography-fontSize-100)',
          'var(--vapor-typography-lineHeight-100)',
        ],
        'vapor-200': [
          'var(--vapor-typography-fontSize-200)',
          'var(--vapor-typography-lineHeight-200)',
        ],
        'vapor-300': [
          'var(--vapor-typography-fontSize-300)',
          'var(--vapor-typography-lineHeight-300)',
        ],
        'vapor-400': [
          'var(--vapor-typography-fontSize-400)',
          'var(--vapor-typography-lineHeight-400)',
        ],
        'vapor-500': [
          'var(--vapor-typography-fontSize-500)',
          'var(--vapor-typography-lineHeight-500)',
        ],
        'vapor-600': [
          'var(--vapor-typography-fontSize-600)',
          'var(--vapor-typography-lineHeight-600)',
        ],
        'vapor-700': [
          'var(--vapor-typography-fontSize-700)',
          'var(--vapor-typography-lineHeight-700)',
        ],
        'vapor-800': [
          'var(--vapor-typography-fontSize-800)',
          'var(--vapor-typography-lineHeight-800)',
        ],
        'vapor-900': [
          'var(--vapor-typography-fontSize-900)',
          'var(--vapor-typography-lineHeight-900)',
        ],
        'vapor-1000': [
          'var(--vapor-typography-fontSize-1000)',
          'var(--vapor-typography-lineHeight-1000)',
        ],
      },
      fontFamily: {
        'vapor-sans': ['var(--vapor-typography-fontFamily-sans)', 'sans-serif'],
        'vapor-code': ['var(--vapor-typography-fontFamily-code)', 'monospace'],
      },
      fontWeight: {
        'vapor-400': 'var(--vapor-typography-fontWeight-400)',
        'vapor-500': 'var(--vapor-typography-fontWeight-500)',
        'vapor-700': 'var(--vapor-typography-fontWeight-700)',
        'vapor-800': 'var(--vapor-typography-fontWeight-800)',
      },
    },
  },
  plugins: [],
}

export default config
