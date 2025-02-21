export const PIN_SIZE = 60;

export const BREAKPOINTS = {
  MOBILE: 425,
  TABLET_VERTICAL: 834,
  TABLET_HORIZONTAL: 1200,
  DESKTOP: 1200,
} as const;

export const LOCATIONS = [
  { id: 1, name: "Point A", activities: "Fishing", x: 200, y: 150 },
  { id: 2, name: "Point B", activities: "Hiking", x: 500, y: 300 },
] as const;

export const ASPECT_RATIOS = {
  MOBILE: "343/600",
  TABLET_VERTICAL: "770/698",
  TABLET_HORIZONTAL: "1130/698",
  DESKTOP: "1240/698",
} as const;
