import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ShortenUrlForm } from "../components/ShortenUrlForm";

export const ShortenUrlPage = () => {
  return (
    <div className="flex flex-col space-y-4 items-center my-24 mx-4">
      <Logo size="large" />
      <div className=" flex flex-col space-y-4 items-center rounded-lg shadow-md p-8 w-11/12 md:w-2/3">
        <h2 className="text:md text-center text-slate-700 md:text-lg">
          ShortURL is a free tool to shorten URLs and generate short links
          <br />
          URL shortener allows to create a shortened link making it easy to
          share
        </h2>
        <ShortenUrlForm />
      </div>
      <Link
        className="text-semibold text-slate-600 py-2 px-4 rounded-lg bg-indigo-100 hover:bg-indigo-200 duration-300"
        to="/most-visited"
      >
        See Top 100 sites visited
      </Link>
    </div>
  );
};
