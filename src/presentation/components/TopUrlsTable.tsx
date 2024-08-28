import React from "react";
import { useGetTopUrls } from "../../application/use_get_top_urls";
import { apiClient } from "../../infrastructure/client";
import { Link } from "react-router-dom";

export const TopUrlsTable = () => {
  const { isPending, data, error } = useGetTopUrls();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error occurred {error.message}</p>;

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-indigo-100 text-black font-medium text-center">
              <th className="py-3 px-6">Top</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Short URL</th>
              <th className="py-3 px-6">Click Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((url, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 border-b border-gray-200 text-center"
              >
                <td className="py-3 px-6 text-gray-800">{i + 1}</td>
                <td className="py-3 px-6 text-gray-800">{url.title}</td>
                <td className="py-3 px-6 text-blue-500">
                  <Link
                    to={`${apiClient.defaults.baseURL}/${url.short_code}`}
                    className="hover:underline break-words"
                  >
                    {apiClient.defaults.baseURL}/{url.short_code}
                  </Link>
                </td>
                <td className="py-3 px-6 text-gray-800">{url.click_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
