import * as yup from "yup";

// skema validasi form
export const loginSchema = yup
  .object({
    user: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
