import axios from "./AxiosUserConfig";
import FormData from "form-data";

const GET_MODULE = "/Account/Login";
const ADD_MODULE = "";
const UPDATE_MODULE = "";
const DELETE_MODULE = "";

var dataDefault = [
  {
    id: 1,
    title: "Quản trị hệ thống",
    icon: "",
    ControllerName: "",
    parentId: 1,
    link: "#"
  },
  {
    id: 2,
    title: "Người dùng",
    icon: "",
    ControllerName: "user",
    parentId: 1,
    link: "/user"
  },
  {
    id: 3,
    title: "Quyền truy cập",
    icon: "",
    ControllerName: "permission",
    parentId: 1,
    link: "/permission"
  },
  {
    id: 4,
    title: "Chi tiết quyền truy cập",
    icon: "",
    ControllerName: "role",
    parentId: 1,
    link: "/role"
  }
];

const getData = userId => {
  return {
    status: "OK",
    status_code: "200",
    response: dataDefault
  };
};

export default {
  getData
};
