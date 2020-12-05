import {
  LOGIN_USER,
  LOG_OUT,
  RTEGISTER_USER,
  LOAD_USER,
  VARIFY_USER,
  SEND_MAIL,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  CLEAR,
  REGISTER_FAIL,
  LOG_IN_FAIL,
  VARIFY_USER_FAIL,
  UPDATE_PASSWORD_FAIL,
  SEND_EMAIL_FAIL,
  UPDATE_EMAIL_FAIL,
  ERROR_CLEAR,
  LOAD_ERROR,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case RTEGISTER_USER:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isLoggedIn: true,
        token: localStorage.token,
      };
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        token: localStorage.token,
      };
    case SEND_MAIL:
    case VARIFY_USER:
      return {
        ...state,
      };
    case LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        token: "",
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        msg: action.payload,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        msg: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        msg: "",
      };
      case REGISTER_FAIL:
        case LOG_IN_FAIL:
          localStorage.clear('token')
          return{
            ...state,
            isLoggedIn: false,
            token : null,
            user: '',
            error: action.payload
          }
      case VARIFY_USER_FAIL:
        case UPDATE_EMAIL_FAIL:
          case UPDATE_PASSWORD_FAIL:
            case SEND_EMAIL_FAIL:
              case LOAD_ERROR:
              return{
                ...state,
                error : action.payload
              }
      case ERROR_CLEAR:
        return {
          ...state,
          error : ''
        }
    default:
      return state;
  }
};
