const initialState = {
  selectedObjectId: null,
  selectedObjectName: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_OBJECT_ID':
      return {
        ...state,
        selectedObjectId: action.payload,
        selectedObjectName: action.payload,
      };
      case 'FETCH_USER_DATA':
      return {
        ...state,
        id: action.payload.id,
        names: action.payload.names,
        imageUrl: action.payload.imageUrl,
      };
    default:
      return state;
  }
};

export default rootReducer;
