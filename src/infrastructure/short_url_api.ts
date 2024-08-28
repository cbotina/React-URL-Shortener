import { ShortUrl } from "../domain/models/short_url";
import { apiClient } from "./client";

class ShortUrlRepository {
  getTop100Urls = async (): Promise<ShortUrl[]> => {
    const res = await apiClient.get("/short_urls");
    const urls: ShortUrl[] = res.data.urls;

    return urls;
  };
}

const repository = new ShortUrlRepository();

export default repository;
