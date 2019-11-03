import { action } from "../../../helpers/Constants";

const ACTION = "GET";
const ACTION_CREATE = ACTION + "_ADD";
const ACTION_UPDATE = ACTION + "_UPDATE";
const ACTION_DELETE = ACTION + "_DELETE";
const ACTION_SUCCESS = ACTION + "_SUCCESS";
const ACTION_ERROR = ACTION + "_ERROR";
const ACTION_HANDLE_SUCCESS = ACTION + "_HANDLE_SUCCESS";

const getData = (controller, params) => {
  return {
    type: ACTION,
    controller,
    params
  };
};

const onHandle = (controller, type, params) => {
  switch (type) {
    case action.CREATE:
      onAdd(params);
      break;
    case action.UPDATE:
      onUpdate(params);
      break;
    case action.DELETE:
      onDelete(params);
      break;
    default:
      break;
  }
};

const onAdd = element => ({
  type: ACTION_CREATE,
  element
});

const onUpdate = element => ({
  type: ACTION_CREATE,
  element
});

const onDelete = id => ({
  type: ACTION_DELETE,
  id
});

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload
});

const onFailure = error => ({
  type: ACTION_ERROR,
  error
});

const onHandleSuccess = payload => ({
  type: ACTION_HANDLE_SUCCESS,
  payload
});

const initialState = {
  data: [],
  error: "",
  refreshFlag: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return { ...state };

    case ACTION_CREATE:
      return { ...state };

    case ACTION_UPDATE:
      return { ...state };

    case ACTION_DELETE:
      return { ...state };

    case ACTION_SUCCESS: {
      const data = action.payload;

      return { ...state, data };
    }

    case ACTION_ERROR: {
      return { ...state, error: action.error };
    }

    case ACTION_HANDLE_SUCCESS: {
      return { ...state, refreshFlag: state.refreshFlag + 1 };
    }

    default:
      return state;
  }
};

export {
  ACTION,
  ACTION_CREATE,
  ACTION_UPDATE,
  ACTION_DELETE,
  getData,
  onHandle,
  onSuccess,
  onFailure,
  onHandleSuccess
};
