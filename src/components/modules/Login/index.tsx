import type { AuthenticateModel, ErrorResponse } from "@types";

import Link from 'next/link'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import { authApi } from "@gate";

import { addFormServerErrors } from '@utils/helpers';

import FormInput from "@modules/FormInput";
import Button from "@elements/Button";
import Checkbox from "@elements/Checkbox";

import styles from './style.module.scss';

interface Props {}

const Login: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [failure, setFailure] = useState<string>("");
  const [error, setError] = useState<string>("");

  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateModel>();

  const onSubmit = async (data:AuthenticateModel) => {
    try {
      if (loading) return;
      setLoading(true);
      setFailure("");
      await authApi.login(data).fetch();
    } catch (e) {
      const error = e as ErrorResponse<AuthenticateModel>;
      if (error.error) {
        const { validationErrors, message } = error.error;
        if (validationErrors) {
          addFormServerErrors(validationErrors, setError);
        }
        setFailure(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginBoxContainer}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register("userNameOrEmailAddress", {
            required: "error",
            pattern: { message: "error", value: /^\S+@\S+$/i },
          })}
          type="email"
          placeholder={t("email") as string}
          errors={errors}
          label="Benutzername oder E-Mail Adresse"
          req
          containerClass={styles.formInputContainerClass}
        />

        <FormInput
          {...register("password", {
            required: "error",
          })}
          type="password"
          placeholder={t("password") as string}
          errors={errors}
          label="Passwort"
          req
          containerClass={styles.formInputContainerClass}
        />

        <Button
          title={"Anmelden" as string}
          type="submit"
        />

        <Checkbox
          title={"Angemeldet bleiben" as string}
          id={"Angemeldet bleiben" as string}
        />

        <Link href="/my-account/lost-password">
          <a>Passwort vergessen?</a>
        </Link>
      </form>
    </div>
  );
};

export default Login;
