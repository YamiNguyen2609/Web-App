var Roles = [
  { id: 1, name: "Administrator" },
  { id: 2, name: "Editor" },
  { id: 3, name: "Manager" },
  { id: 4, name: "User" }
];

var Permissions = [
  { id: 1, name: "truy cập người dùng", controllerName: "User" },
  { id: 2, name: "truy cập quyền", controllerName: "Role" },
  { id: 3, name: "truy cập chi tiết quyền", controllerName: "Permission" },
  { id: 4, name: "truy cập module", controllerName: "Module" }
];

var Modules = [
  {
    id: 1,
    title: "Quản trị hệ thống",
    icon: "cui-cog",
    ControllerName: "",
    parentId: 1,
    link: "#"
  },
  {
    id: 2,
    title: "Người dùng",
    icon: "cui-user",
    ControllerName: "User",
    parentId: 1,
    link: "/user"
  },
  {
    id: 3,
    title: "Quyền truy cập",
    icon: "cui-shield",
    ControllerName: "role",
    parentId: 1,
    link: "/role"
  },
  {
    id: 4,
    title: "Chi tiết quyền truy cập",
    icon: "cui-user-follow",
    ControllerName: "permission",
    parentId: 1,
    link: "/permission"
  },
  {
    id: 5,
    title: "Module",
    icon: "cui-list",
    ControllerName: "module",
    parentId: 1,
    link: "/module"
  },
  {
    id: 6,
    title: 'Test1',
    icon: 'cui-user',
    ControllerName: 'User',
    parentId: 6,
    link: "/user"
  },
  {
    id: 7,
    title: 'Test2',
    icon: 'cui-shield',
    ControllerName: 'role',
    parentId: 6,
    link: "/role"
  },
  {
    id: 8,
    title: 'Test3',
    icon: 'cui-user-follow',
    ControllerName: 'permission',
    parentId: 6,
    link: "/permission"
  },
  {
    id: 9,
    title: "Page Test",
    icon: "cui-user-follow",
    ControllerName: "test",
    parentId: 9,
    link: "/test"
  }
];

var Users = [
  {
    id: 1,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 2,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 3,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 4,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 5,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 6,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 7,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 8,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 9,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  },
  {
    id: 10,
    userName: "thuan@gmail.com",
    email: "thuan@gmail.com",
    fullName: "Nguyễn Trường Thuận",
    avatar: "",
    permissions: null,
    phoneNumber: "023846987",
    letterAvatar: "NTT",
    type: 2,
    isNew: false
  }
];

const onAddTest = (controller, params) => {
  switch (controller) {
    case "Role":
      params["id"] = Roles.length + 1;
      Roles.push(params);
      return 1;

    case "User":
      params["id"] = Users.length + 1;
      Users.push(params);
      return 1;

    case "Permission":
      params["id"] = Permissions.length + 1;
      Permissions.push(params);
      console.log(Permissions);
      return 1;

    case "Module":
      params["id"] = Modules.length + 1;
      Modules.push(params);
      return 1;

    default:
      break;
  }
};

const onUpdateTest = (controller, params) => {
  switch (controller) {
    case "Role":
      Roles = Roles.map(e => {
        if (e.id == params.id) {
          for (var el in params) {
            e[el] = params[el];
          }
        }
        return e;
      });
      return 1;

    case "User":
      Users = Users.map(e => {
        if (e.id == params.id) {
          for (var el in params) {
            e[el] = params[el];
          }
        }
        return e;
      });
      return 1;

    case "Permission":
      Permissions = Permissions.map(e => {
        if (e.id == params.id) {
          for (var el in params) {
            e[el] = params[el];
          }
        }
        return e;
      });
      return 1;

    case "Module":
      Modules = Modules.map(e => {
        if (e.id == params.id) {
          for (var el in params) {
            e[el] = params[el];
          }
        }
        return e;
      });
      return 1;

    default:
      break;
  }
};

const onDeleteTest = (controller, params) => {
  switch (controller) {
    case "Role":
      Roles = Roles.filter(e => {
        return e.id !== params;
      });
      return 1;

    case "User":
      Users = Users.filter(e => {
        return e.id !== params;
      });
      return 1;

    case "Permission":
      Permissions = Permissions.filter(e => {
        return e.id !== params;
      });
      return 1;

    case "Module":
      Modules = Modules.filter(e => {
        return e.id !== params;
      });
      return 1;

    default:
      break;
  }
};

export {
  Roles,
  Permissions,
  Modules,
  Users,
  onAddTest,
  onUpdateTest,
  onDeleteTest
};
