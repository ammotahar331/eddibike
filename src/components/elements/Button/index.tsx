import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return <button {...rest}>{title}</button>;
};

export default Button;
