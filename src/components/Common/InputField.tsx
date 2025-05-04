import { IconType } from "react-icons/lib";

type InputFieldProps = {
  type: string;
  id: string;
  label: string;
  onChange: () => void;
  hasImage?: boolean;
  icon?: IconType;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  label,
  onChange,
  hasImage = false,
  icon: Icon,
}) => {
  //Handle Onchane event of input field
  const handleOnChange = () => {
    onChange(); //TODO Need to implement this method
  };
  return (
    <>
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          className="p-1 border-1 border-gray w-full rounded focus:outline-none focus:border-darkblue peer"
          onChange={handleOnChange}
          autoComplete="off"
        ></input>
        <label
          htmlFor={id}
          className="absolute top-2 left-2 cursor-text text-sm flex flex-row items-center gap-x-1 peer-focus:-top-3 peer-focus:bg-white peer-focus:text-xs transition-all"
        >
          {hasImage && <div>{Icon && <Icon className="h-4 w-4"></Icon>}</div>}
          {label}
        </label>
      </div>
    </>
  );
};

export default InputField;
