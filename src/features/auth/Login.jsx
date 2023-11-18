import useLogin from "./useLogin";

import BrandSection from "./components/BrandSection";
import FormSection, {
  FormInputField,
  FormButton,
  ErrorContainer,
} from "./components/FormSection";

const Login = () => {
  const {
    isSubmitting,
    backendError,
    register,
    handleSubmit,
    errors,
    isValid,
  } = useLogin();

  return (
    <div className="lg:grid lg:grid-cols-12 lg:min-h-screen">
      <BrandSection />

      <FormSection>
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <FormInputField
            id={"user"}
            name={"user"}
            type={"text"}
            register={register}
            errors={errors}>
            user
          </FormInputField>
          <FormInputField
            id={"password"}
            name={"password"}
            type={"password"}
            register={register}
            errors={errors}>
            Password
          </FormInputField>
          <FormButton
            text={"login"}
            isFormValid={isValid}
            isSubmitting={isSubmitting}
          />
          <ErrorContainer backendError={backendError} />
        </form>
      </FormSection>
    </div>
  );
};

export default Login;
