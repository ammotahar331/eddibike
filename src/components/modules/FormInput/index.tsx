/* eslint-disable react/display-name */
import cn from "classnames";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";

import type { DeepMap, FieldError } from "react-hook-form";

import styles from './style.module.scss';

interface Props<T = unknown>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  errors: DeepMap<T, FieldError>;
  containerClass?: string;
  label?: string;
  req?: boolean;
}

const FormInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, containerClass, label, req, errors, ...props }, ref) => {
    return (
      <div className={cn("form-group", styles.formInputContainer, containerClass)}>
        {label && (
          <label>
            {label} {req && <span className="required">*</span>}
          </label>
        )}
        <input ref={ref} className={cn("form-control", className)} {...props} />
        <ErrorMessage
          name={props.name}
          render={({ message }) => <p className="form-error">{message}</p>}
          errors={errors}
        />
      </div>
    );
  }
);

export default FormInput;
