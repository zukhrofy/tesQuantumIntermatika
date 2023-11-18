import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { usePegawaiContext } from "./PegawaiContext";
import pegawaiSchema from "./pegawaiSchema";

const EditPegawai = () => {
  const { pegawais, dispatch } = usePegawaiContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedPegawai = pegawais.rows.find((pegawai) => pegawai.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(pegawaiSchema),
    defaultValues: {},
  });

  useEffect(() => {
    reset(selectedPegawai);
  }, [reset, selectedPegawai]);

  const onSubmit = (data) => {
    try {
      // await axios.patch(`/api/Pegawai/`,data);
      dispatch({ type: "UPDATE_PEGAWAI", payload: data });
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Detail Karyawan</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Nama
          </label>
          <input
            {...register("nama")}
            className={`w-full px-4 py-2 border border-gray-300 rounded ${
              errors?.nama && "border-red-400"
            }`}
          />
          <div className="text-sm text-red-400">{errors?.nama?.message}</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            NIP:
          </label>
          <input
            {...register("nip")}
            className={`w-full px-4 py-2 border border-gray-300 rounded ${
              errors?.nip && "border-red-400"
            }`}
          />
          <div className="text-sm text-red-400">{errors?.nip?.message}</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Jabatan:
          </label>
          <input
            {...register("jabatan")}
            className={`w-full px-4 py-2 border border-gray-300 rounded ${
              errors?.jabatan && "border-red-400"
            }`}
          />
          <div className="text-sm text-red-400">{errors?.jabatan?.message}</div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded">
            Edit
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className=" px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPegawai;
