import { useMutation } from "@tanstack/react-query";
import ShortUrlApi from "../infrastructure/short_url_api";

interface CreateShortUrlProps {
  setShortenedUrl: (url: string | null) => void;
}

export function useCreateShortUrl({ setShortenedUrl }: CreateShortUrlProps) {
  return useMutation({
    mutationFn: ShortUrlApi.createShortUrl,

    onSuccess: (url) => {
      setShortenedUrl(url.short_code);
    },

    onError: () => {
      alert("Failed to shorten the URL");
      setShortenedUrl(null);
    },
  });
}
