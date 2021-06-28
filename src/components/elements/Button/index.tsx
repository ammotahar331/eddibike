interface Props {
  title: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="">
      {title}
    </button>
  );
};

export default Button;
