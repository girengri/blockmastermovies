import useSWR, { SWRConfiguration } from "swr";
import { IResult } from "../interfaces";

export const useMovies = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IResult>(url, config);

  return {
    movies: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
};
