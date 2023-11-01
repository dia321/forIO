export interface DataPoint {
  date: string;
  value: number;
}
export type DataPoints = DataPoint[];

export interface EventTargetWithId extends EventTarget {
  id: string;
}
