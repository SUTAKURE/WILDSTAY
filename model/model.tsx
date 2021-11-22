export type Model = {
  data: DBModel[];
  isLoading: any;
  isError: any;
};

export interface DBModel {
  id: number;
  name: number;
  lat: number;
  lon: number;
  price: number;
  shower: number;
  water: number;
  toilet: number;
  roof: number;
  parking: number;
}
