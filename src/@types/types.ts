import { ReactNode } from "react";
import { FormActions } from "../enums/FormActions";

export type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

export type Action = {
  type: FormActions;
  payload: any;
}

export type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

export type FormProviderProps = {
  children: ReactNode
}