import useSWR from 'swr';
import model from 'model/model';

function GetMapInfo(): model {
  const { data, error } = useSWR(`/api/mapinfo`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default GetMapInfo;
