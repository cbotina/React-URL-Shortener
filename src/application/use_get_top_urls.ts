import { useQuery } from "@tanstack/react-query";
import ShortUrlRepository from "../infrastructure/short_url_api";

export function getQueryKey() {
  return ["urls"];
}

export function useGetTopUrls() {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: ShortUrlRepository.getTop100Urls,
    refetchOnMount: "always",
  });
}
