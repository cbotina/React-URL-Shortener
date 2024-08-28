import { ShortUrl } from "../domain/models/short_url";
import { apiClient } from "./client";

class ShortUrlRepository {
  getTop100Urls = async (): Promise<ShortUrl[]> => {
    const res = await apiClient.get("/short_urls");
    const urls: ShortUrl[] = res.data.urls;

    return urls;
  };

  createShortUrl = async (fullUrl: string): Promise<ShortUrl> => {
    const res = await apiClient.post("/short_urls", { full_url: fullUrl });
    const createdUrl: ShortUrl = res.data;

    return createdUrl;
  };
}

const repository = new ShortUrlRepository();

export default repository;
