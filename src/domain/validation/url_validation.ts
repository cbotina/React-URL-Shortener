import * as Yup from "yup";

export const urlValidationSchema = Yup.object().shape({
  fullUrl: Yup.string().url("Invalid URL format").required("URL is required"),
});

export interface ShortenUrlFormFields {
  fullUrl: string;
}
