const initialState = {
  selectedObjectId: null,
  selectedObjectName: null,
  selectedObjectDesc: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_OBJECT_ID':
      return {
        ...state,
        selectedObjectId: action.payload,
        selectedObjectName: action.payload,
        selectedObjectDesc: action.payload,
      };
      case 'FETCH_USER_DATA':
      return {
        ...state,
        id: action.payload.id,
        names: action.payload.names,
        imageUrl: action.payload.imageUrl,
        desc: action.payload.desc,
      };
    default:
      return state;
  }
};

export default rootReducer;
