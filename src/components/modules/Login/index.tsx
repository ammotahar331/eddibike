import type { AuthenticateModel } from "@types";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import FormInput from "@modules/FormInput";
import Button from "@elements/Button";

interface Props {}

const Login: React.FC<Props> = () => {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateModel>();

  return (
    <div>
      <div>
        <span>Login</span>
      </div>

      <FormInput
        ref={register({
          required: "error",
          pattern: { message: "error", value: /^\S+@\S+$/i },
        })}
        type="email"
        name="userNameOrEmailAddress"
        placeholder={t("email") as string}
        errors={errors}
      />

      <Button
        title={"Anmelden" as string}
        onClick={() => console.log("salam")}
      />
    </div>
  );
};

export default Login;
