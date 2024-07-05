import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";
import { Action, FormState } from "./interface";
import formReducer from "./reducers/formReducer";

// Initial state
const initialState: FormState = {
  fields: [],
};

// Create context with default values
const FormContext = createContext<{
  state: FormState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component
interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
