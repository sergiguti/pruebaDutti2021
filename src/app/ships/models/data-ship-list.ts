import {Ship} from './ship';

export interface DataShipList {
  count: number;
  next: string;
  previous: string;
  results: Ship[];
}
