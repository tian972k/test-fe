export interface Location {
  id: number;
  name: string;
  activities: string;
  x: number;
  y: number;
}

export interface DrawImageInfo {
  dx: number;
  dy: number;
}

export interface Offset {
  x: number;
  y: number;
}

export interface ImageCache {
  [key: string]: HTMLImageElement;
}

export default {}
