import { Link } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { queryClient } from "../..";
import { Logo } from "../components/Logo";
import { TopUrlsTable } from "../components/TopUrlsTable";

export const TopUrlsPage = () => {
  const refreshTopUrls = () => {
    queryClient.invalidateQueries({ queryKey: ["urls"] });
  };

  return (
    <div className="relative container mx-auto p-6 flex flex-col items-stretch space-y-3 justify-center">
      <div className="flex flex-row justify-between  w-full">
        <div className="flex flex-row space-x-4 items-center">
          <Link to="/">
            <Logo size="small" />
          </Link>
          <h3 className="text-2xl font-bold">Top 100 sites visited</h3>
          <button onClick={refreshTopUrls}>
            <ArrowPathIcon className="size-4 text-gray-700 font-bold"></ArrowPathIcon>
          </button>
        </div>
        <Link
          to="/"
          className="hidden md:flex min-w-max p-3 px-6 py-2 text-white bg-indigo-500 rounded-lg baseline hover:bg-indigo-300 duration-300"
        >
          Shorten a URL
        </Link>
      </div>
      <TopUrlsTable />
      <Link
        to="/"
        className="md:hidden w-1/2 mx-auto  p-3 px-6 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 duration-300"
      >
        Shorten a URL
      </Link>
    </div>
  );
};
