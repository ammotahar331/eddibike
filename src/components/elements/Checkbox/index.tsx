import type { InputHTMLAttributes, DetailedHTMLProps } from "react";

import styles from './style.module.scss';

interface Props
  extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  id: string;
}

const Checkbox: React.FC<Props> = ({ title, id, ...rest }) => {
  return(
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id={id} {...rest} />
      <label for={id}>{title}</label>
    </div>
  );
};

export default Checkbox;
