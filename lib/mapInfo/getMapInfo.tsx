import useSWR from 'swr';
import type { Model } from 'model/model';

export default function GetMapInfo(): Model {
  const { data, error } = useSWR(`/api/getMapInfo`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
