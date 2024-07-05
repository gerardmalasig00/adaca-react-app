export interface FormState {
  fields: Field[];
}

export interface Field {
  type: string;
  label: string;
  value: string;
  options?: { label: string; value: string }[];
}

export interface FormState {
  fields: Field[];
}

export interface AddFieldAction {
  type: "ADD_FIELD";
  payload: Field;
}

export interface RemoveFieldAction {
  type: "REMOVE_FIELD";
  payload: number;
}

export interface UpdateFieldAction {
  type: "UPDATE_FIELD";
  payload: {
    index: number;
    field: Field;
  };
}

export type Action = AddFieldAction | RemoveFieldAction | UpdateFieldAction;
