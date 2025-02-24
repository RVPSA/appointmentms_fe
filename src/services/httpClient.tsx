import axios from "axios";

type headerType = {
  "Content-Type": string;
  userId?: number;
  userRoleId?: number;
  userName?: string;
};

//TODO need to change this with backend
const getHeaders = (): headerType => {
  let currentUser: string | null = localStorage.getItem("currentUser");
  let currentUserObject: currentUserType;
  let header: headerType;

  if (typeof currentUser === "string") {
    currentUserObject = JSON.parse(currentUser);
    header = {
      "Content-Type": "application/json",
      userId: Number(currentUserObject.userId),
      userRoleId: Number(currentUserObject.userId),
      userName: currentUserObject.userName,
    };
    return header;
  } else {
    header = {
      "Content-Type": "application/json",
    };
    return header;
  }
};

export const baseURL = axios.create({
  baseURL: " http://localhost:5007/api/",
  headers: getHeaders(),
  withCredentials: true,
});
