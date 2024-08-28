import { useFormik } from "formik";
import { useState } from "react";
import {
  ShortenUrlFormFields,
  urlValidationSchema,
} from "../../domain/validation/url_validation";
import { useCreateShortUrl } from "../../application/use_create_short_url";
import { apiClient } from "../../infrastructure/client";

export const ShortenUrlPage = () => {
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="fullUrl"
          value={formik.values.fullUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter URL"
        />

        {formik.touched.fullUrl && formik.errors.fullUrl ? (
          <p>{formik.errors.fullUrl}</p>
        ) : null}

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Shortening..." : "Shorten URL"}
        </button>

        {shortenedUrl && (
          <div>
            <a href={`${apiClient.defaults.baseURL}/${shortenedUrl}`}>
              {apiClient.defaults.baseURL}/{shortenedUrl}
            </a>
          </div>
        )}
      </form>
    </div>
  );
};
