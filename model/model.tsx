type model = {
  data: dbmodel[];
  isLoading: any;
  isError: any;
};

interface dbmodel {
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

export default model;
