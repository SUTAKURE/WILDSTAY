export default function UpdateMapInfo(
  id: number,
  title: string,
  price: number,
  shower: number,
  water: number,
  toilet: number,
  roof: number,
  parking: number,
) {
  const url = `/api/getMapInfo`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Id: id,
      Title: title,
      Price: price,
      Shower: shower,
      Water: water,
      Toilet: toilet,
      Roof: roof,
      Parking: parking,
    }),
  };
  fetch(url, requestOptions);
}
