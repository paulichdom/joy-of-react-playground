export type Theme = 'light' | 'dark';
export type ThemeInfo = {
  text: string;
  bg: string
}

export const COLORS: Record<Theme, ThemeInfo> = {
  light: {
    text: 'hsl(0deg 0% 8%)',
    bg: 'hsl(0deg 0% 95%)',
  },
  dark: {
    text: 'white',
    bg: 'hsl(0deg 0% 8%)',
  },
};