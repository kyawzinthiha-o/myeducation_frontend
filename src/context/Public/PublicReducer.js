import {
  GET_USER,
  GET_USER_PROFILE,
  DELETE_USER_PROFILE,
  IS_LOADING,
  GET_USER_POST,
  DELETE_SEARCH,
  GET_SEARCH,
  NO_MORE_LOAD,
  NO_POST_LOAD,
  CLEAR_NO_MORE_LOAD
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        currentProfile: action.payload,
      };
    case GET_USER_POST:
      return {
        ...state,
        currentPosts: state.currentPosts.concat(action.payload),
      };
    case DELETE_USER_PROFILE:
      return {
        ...state,
        currentProfile: "",
        currentPosts: [],
      };
    case IS_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };
    case DELETE_SEARCH:
      return {
        ...state,
        searched: '',
      };
    case GET_SEARCH:
      return {
        ...state,
        searched: action.payload,
      };
    case NO_MORE_LOAD:
      return {
        ...state,
        Nomoreload: action.payload,
      };
    case NO_POST_LOAD:
      return{
        ...state,
        PostNoMoreLoad : action.payload,
      }
      case CLEAR_NO_MORE_LOAD:
        return {
          ...state,
          PostNoMoreLoad: false
        }
    default:
      return {
        ...state,
      };
  }
};
