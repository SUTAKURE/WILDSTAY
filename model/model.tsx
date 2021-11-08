export type Model = {
  data: DbModel[];
  isLoading: any;
  isError: any;
};

export interface DbModel {
  id: number;
  name: string;
  lat: number;
  lon: number;
  price: number;
  shower: number;
  water: number;
  toilet: number;
  roof: number;
  parking: number;
}
