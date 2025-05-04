type ButtonProps = {
  title: string;
  color?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, color = "blue", onClick }) => {
  return (
    <div
      className={`${
        color == "blue" ? "bg-darkblue" : `bg-${color}`
      } text-center text-white p-1 rounded cursor-pointer`}
    >
      <button className="cursor-pointer w-full" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
