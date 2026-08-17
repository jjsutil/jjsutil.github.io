/* Shared between the theme toggle and the phase-space canvas. */
export const PHASE_COLORS = {
  dark:  { bg: '#06080D', dot: 'rgba(230,237,243,.22)', hot: 'rgba(255,160,40,.6)' },
  light: { bg: '#F5F2EA', dot: 'rgba(22,27,38,.22)', hot: 'rgba(192,92,16,.6)' },
} as const;

export type ThemeName = keyof typeof PHASE_COLORS;
export type PhasePalette = (typeof PHASE_COLORS)[ThemeName];
