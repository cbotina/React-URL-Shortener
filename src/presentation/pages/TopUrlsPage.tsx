import React from "react";
import { useGetTopUrls } from "../../application/use_get_top_urls";

export const TopUrlsPage = () => {
  const { isPending, data, error } = useGetTopUrls();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error occurred {error.message}</p>;

  return (
    <div>
      <ul>
        {data.map((url, i) => {
          return <li>{url.title}</li>;
        })}
      </ul>
    </div>
  );
};
