import { AxiosResponse } from "axios";
import { baseURL } from "./httpClient";

type logindetailsType = {
  userName: string;
  password: string;
};

export const loginService = async (
  data: logindetailsType
): Promise<AxiosResponse> => {
  const response: AxiosResponse = await baseURL.post("user/login", data);
  return response;
};
