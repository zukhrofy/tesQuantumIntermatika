import * as yup from "yup";

// skema validasi form
const pegawaiSchema = yup
  .object({
    nama: yup.string().required(),
    nip: yup.string().required(),
    jabatan: yup.string().required(),
  })
  .required();

export default pegawaiSchema;
