import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

import logo from "@/common/assets/logo/logo.png";

const FormSection = ({ children }) => {
  return (
    <section className="lg:col-span-7 xl:col-span-6 flex justify-center items-center px-8 py-8">
      <div className="w-full max-w-md">
        {/* mobile logo and title */}
        <Link
          className="lg:hidden relative flex justify-center items-center h-16 sm:h-20 w-16 sm:w-20 -mt-16 mb-2 bg-white rounded-full"
          to="/"
          reloadDocument>
          <img src={logo} alt="logo" />
        </Link>
        {/* web logo and title */}
        <h1 className="lg:flex lg:items-center lg:gap-2 text-lg sm:text-3xl font-bold text-gray-900">
          <span>Login</span>
          <img
            src={logo}
            alt="brand logo on login"
            className="hidden lg:block"
          />
        </h1>
        {/* input and submit button here */}
        {children}
      </div>
    </section>
  );
};

export const FormInputField = ({
  register,
  id,
  children,
  type,
  name,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium">
        {children}
      </label>
      <input
        type={type}
        id={id}
        className={`w-full text-sm text-gray-800 rounded-md border-gray-400 ${
          errors?.[name] && "border-red-500 focus:ring-0 focus:border-red-500"
        }`}
        {...register(name)}
      />
      {errors[name]?.message && (
        <span className="text-xs text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export const FormButton = ({ text, isFormValid, isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={!isFormValid}
      className="w-full sm:w-auto flex justify-center items-center gap-1 px-12 py-3 text-sm font-medium text-white hover:text-blue-600 disabled:hover:text-white bg-blue-600 disabled:bg-blue-600/60 hover:bg-transparent border hover:border-blue-600 rounded-md transition">
      {text}
      {isSubmitting ? (
        <ClipLoader size={20} color="#000000" loading={isSubmitting} />
      ) : (
        <Icon icon={faArrowRight} />
      )}
    </button>
  );
};

export const ErrorContainer = ({ backendError }) => {
  backendError && toast.error(`${backendError}`);
};

export default FormSection;
