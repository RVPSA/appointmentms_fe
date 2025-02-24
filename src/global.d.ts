type actionType = {
  type: string;
  data?: any;
};

type sagaInputType = {
  type: string;
  data?: any;
};

type backendResponseGeneral = {
  statusCode: number;
  message: string;
};
//TODO need to check with backend
type currentUserType = {
  userName: string;
  userId: number;
  userRoleId: number;
};
