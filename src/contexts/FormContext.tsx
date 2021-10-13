import { createContext, useContext, useReducer } from "react";
import { Action, ContextType, FormProviderProps, State } from "../@types/types";
import { FormActions } from "../enums/FormActions";

const initialData = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
}

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
const FormReducer = (state: State, action: Action) => {

  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
}

// Provider
const FormProvider = ({ children }: FormProviderProps) => {

  const [state, dispatch] = useReducer(FormReducer, initialData);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

// Hook
const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("Esse Hook precisa ser usado dentro do FormProvider.")
  }
  return context;
}

export {
  FormProvider,
  useForm,
};