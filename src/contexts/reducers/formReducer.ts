import { Action, FormState } from "../interface";

// Reducer function
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    case "REMOVE_FIELD":
      return {
        ...state,
        fields: state.fields.filter((_, index) => index !== action.payload),
      };
    case "UPDATE_FIELD": {
      const updatedFields = state.fields.map((field, index) =>
        index === action.payload.index ? action.payload.field : field
      );
      return {
        ...state,
        fields: updatedFields,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
