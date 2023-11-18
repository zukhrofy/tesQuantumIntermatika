import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "./authSchema";

const useLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backendError, setBackendError] = useState(null);
  const navigate = useNavigate();
  // react hook config
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  // api call
  const loginUser = async ({ user, password }) => {
    const response = await axios("/api/User", {
      params: {
        user,
        password,
      },
    });
    return await response.data;
  };

  // event submit form
  const onSubmit = async ({ user, password }) => {
    try {
      setBackendError(null);
      setIsSubmitting(true);
      // request and save server response
      const responseData = await loginUser({ user, password });
      responseData.code == 1
        ? navigate("/pegawai")
        : setBackendError(responseData.message);
    } catch (err) {
      console.log(err.response.data.error);
      // show server errors
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    backendError,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
  };
};

export default useLogin;
