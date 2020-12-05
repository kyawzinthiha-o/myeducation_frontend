import {
  ADD_PROFILE,
  LOAD_PROFILE,
  UPDATE_PROFILE,
  CREATE_POST,
  LOAD_POST,
  UPLOADING,
  LOADING,
  CLEAR,
  UPDATE_COVER_IMG,
  REMOVE_PROFILE,
  NO_MORE_LOAD,
  ADD_PROFILE_FAIL,
  UPDATE_COVER_IMG_FAIL,
  UPDATE_PROFILE_FAIL,
  CREATE_POST_FAIL,
  GET_USER_FAIL,
  LOAD_POST_FAIL,
  CLEAR_AUTH_ERROR,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PROFILE:
    case LOAD_PROFILE:
      return {
        ...state,
        profile: action.payload,
        hasProfile: true,
      };
    case LOAD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case UPDATE_PROFILE:
    case UPDATE_COVER_IMG:
      return {
        ...state,
        msg: action.payload,
      };
    case UPLOADING:
      return {
        ...state,
        uploading: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        msg: "",
      };
    case REMOVE_PROFILE:
      return {
        ...state,
        profile: {},
        hasProfile: false,
        posts: [],
        loading: false,
        uploading: false,
        msg: "",
      };
      case NO_MORE_LOAD:
        return {
          ...state,
          Nomoreload: action.payload,
        };
        case ADD_PROFILE_FAIL:
          case UPDATE_PROFILE_FAIL:
          case UPDATE_COVER_IMG_FAIL:
            case GET_USER_FAIL:
              case LOAD_POST_FAIL:
                return{
                  ...state,
                  error : action.payload
                }
        case CREATE_POST_FAIL:
          return {
            ...state,
            posterror: action.payload
          }
        case CLEAR_AUTH_ERROR:
          return {
            ...state,
            error : "",
            posterror: ""
          }
    default:
      return state;
  }
};
