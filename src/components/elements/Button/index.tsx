import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from './style.module.scss';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return <button className={styles.button} {...rest}>{title}</button>;
};

export default Button;
