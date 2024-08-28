import { useState } from "react";
import { useCreateShortUrl } from "../../application/use_create_short_url";
import { useFormik } from "formik";
import {
  ShortenUrlFormFields,
  urlValidationSchema,
} from "../../domain/validation/url_validation";
import { apiClient } from "../../infrastructure/client";
import { CopyToClipboard } from "./CopyToClipboard";
import { Link } from "react-router-dom";

export const ShortenUrlForm = () => {
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);

  const mutation = useCreateShortUrl({ setShortenedUrl });

  const formik = useFormik<ShortenUrlFormFields>({
    initialValues: { fullUrl: "" },

    validationSchema: urlValidationSchema,

    onSubmit: (values) => {
      mutation.mutate(values.fullUrl);
    },
  });

  return (
    <div className="flex flex-col items-center space-y-6 w-fit md:w-3/4">
      <form
        className="flex flex-row w-full items-start"
        onSubmit={formik.handleSubmit}
      >
        {/* Textfield & Error message */}
        <div className="flex flex-col w-full">
          <input
            className="w-full px-4 py-2 border rounded-l-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-200  focus:border-indigo-200 "
            type="text"
            name="fullUrl"
            value={formik.values.fullUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter URL"
          />
          {formik.touched.fullUrl && formik.errors.fullUrl ? (
            <p className="p-1 text-pink-600">{formik.errors.fullUrl}</p>
          ) : null}
        </div>

        <button
          className="min-w-max p-3 px-3 md:px-6 py-2 text-white bg-indigo-500 rounded-r-lg baseline hover:bg-indigo-300 duration-300"
          type="submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {shortenedUrl && (
        <div className="flex flex-col md:flex-row space-y-1 w-2/3 md:justify-between items-center ">
          <div className="flex flex-col md:flex-row space-y-1 md:space-x-1 items-center">
            <p className="font-bold">Shortened URL: </p>
            <Link
              className="text-blue-500 hover:underline hover:text-blue-300 duration-300"
              to={`${apiClient.defaults.baseURL}/${shortenedUrl}`}
            >
              {apiClient.defaults.baseURL}/{shortenedUrl}
            </Link>
          </div>

          <CopyToClipboard shortenedUrl={shortenedUrl}></CopyToClipboard>
        </div>
      )}
    </div>
  );
};
