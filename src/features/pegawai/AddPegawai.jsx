import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { usePegawaiContext } from "./PegawaiContext";
import pegawaiSchema from "./pegawaiSchema";

const AddPegawai = () => {
  const { dispatch } = usePegawaiContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(pegawaiSchema),
  });

  const onSubmit = async (data) => {
    try {
      //   await axios.post(`/api/Pegawai/`, { id: uuidv4(), ...data });
      dispatch({ type: "ADD_PEGAWAI", payload: data });
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">ADD KARYAWAN</h1>
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
            Save
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

export default AddPegawai;
