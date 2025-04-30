import { useState } from "react";
import { AppDispatch, RootState } from "../store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userLogIn } from "../store/actions";
import { email, password, stethoscope } from "../assets";
import { useTranslation } from "react-i18next";

//<> Local type declarion area
type LoginDetailsType = {
  userName: string;
  password: string;
};
//<> Local type declarion area end

const LoginPage = () => {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const [t] = useTranslation("signIn");

  const [loginDetails, setLoginDetails] = useState<LoginDetailsType>({
    userName: "",
    password: "",
  });

  const { isUserLogIn } = useAppSelector((state) => state.loginReducer);

  console.log("Is user Login from the loginpage:", isUserLogIn);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogIn = (): void => {
    console.log("Login details are: ", loginDetails);
    dispatch(userLogIn(loginDetails));
  };

  return (
    <div className="flex flex-col bg-white p-5 rounded-xl shadow-2xl">
      {/* //<> stethoscope Picture */}
      <div className="w-full flex justify-center items-center">
        <div className="h-14 w-14 rounded-full bg-lightblue flex justify-center items-center">
          <img
            src={stethoscope}
            alt="stethoscope"
            className="w-10 h-10 object-fill"
          />
        </div>
      </div>

      {/* //<> Welcome Back header */}
      <div className="text-center font-extrabold text-2xl font-serif mt-3">
        {t("signIn.header")}
      </div>
      {/* //<> Sub header */}
      <div className="text-center px-3 font-medium text-xs mt-3">
        {t("signIn.subHeader")}
      </div>
      {/* //<> Username field*/}
      <div className="mt-5 flex gap-2 flex-col">
        <div className="text-xs font-extrabold">
          {t("signIn.userName.labelName")}
        </div>
        <div className="flex flex-row rounded border p-2 h-10 border-gray">
          <div className="w-full h-full flex items-center justify-center">
            <img src={email} alt="password" className="h-4 w-4 mr-0.5" />
          </div>
        <input
          type="text"
          placeholder={t("signIn.userName.placeHolder")}
          className="outline-none py-1"
        ></input>
        </div>
        
      </div>
      {/* //<>Password */}
      <div className="mt-4 flex gap-2 flex-col">
        <div className="text-xs font-extrabold">
          {t("signIn.password.labelName")}
        </div>
        <div className="flex flex-row rounded border p-2 h-8 border-gray">
          <img src={password} alt="password" className="h-4 w-4 mr-0.5" />
          <input
            type="text"
            placeholder={t("signIn.password.placeHolder")}
            className=""
          ></input>
        </div>
      </div>
      <div className="flex flex-row justify-between text-[11px] mt-3">
        <div className="">{t("signIn.rememberMe")}</div>
        <div>{t("signIn.forgotPassword")}</div>
      </div>
      <div className="mt-3">
        <div className="bg-darkblue text-center text-white p-1 rounded cursor-pointer">
          <button className="cursor-pointer">{t("signIn.buttonText")}</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

{
  /* <div className="text-center p-4">
        <label>Username : </label>
        <input
          type="text"
          placeholder="username"
          className="border-2 border-black"
          name="userName"
          onChange={handleChange}
        ></input>
        <br />
        <label>Password : </label>
        <input
          type="text"
          placeholder="password"
          className="border-2 border-black"
          name="password"
          onChange={handleChange}
        ></input>
        <br />
        <button
          className="mt-4 border-[1px] cursor-pointer"
          onClick={() => {
            handleLogIn();
          }}
        >
          Log In
        </button>
      </div> */
}
