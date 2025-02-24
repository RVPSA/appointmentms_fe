import { USER_LOGIN } from "./type";

type LoginDetailsType = {
  userName: string;
  password: string;
};

export const userLogIn = (data:LoginDetailsType):actionType => {
    console.log(data)
    return {
        type:USER_LOGIN,
        data:data
    }
};
