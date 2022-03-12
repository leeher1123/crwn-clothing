const initialState = {
  currentUser: null,
};

export const Action = {
  Type: {
    GET_CURRENT_USER: 'user/GET_CURRENT_USER',
  },
  Creators: {
    getCurrentUser: (payload) => ({
      type: Action.Type.GET_CURRENT_USER,
      payload,
    }),
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.Type.GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
