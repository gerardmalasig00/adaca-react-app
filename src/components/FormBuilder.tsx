import { useState } from "react";
import FormField from "./FormField";
import { useFormContext } from "../contexts/FormContext";
import TextInput from "./TextInput";
import { Field } from "../contexts/interface";
import SelectInput from "./SelectInput";

const FormBuilder = () => {
  const { state, dispatch } = useFormContext();
  const [newFieldType, setNewFieldType] = useState("text");
  const [newFieldLabel, setNewFieldLabel] = useState("");
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [optInput, setOptInput] = useState("");
  const [error, setError] = useState(false);

  const validate = () => {
    if (!newFieldLabel) {
      setError(true);
      return false;
    }

    if (newFieldType === "select" && !optInput) {
      setError(true);
      return false;
    }

    return true;
  };

  const handleAddField = () => {
    const isFormValid = validate();
    if (!isFormValid) return;
    setError(false);
    const newField: Field = {
      type: newFieldType,
      label: newFieldLabel,
      value: "",
      options: newFieldType === "select" ? options : undefined,
    };
    dispatch({ type: "ADD_FIELD", payload: newField });
  };

  const handleOptInputChange = (value: string) => {
    setOptInput(value);
    const newOptions = value.split(",");
    setOptions(newOptions.map((val) => ({ label: val, value: val })));
  };

  return (
    <div className="form-builder">
      <div className="form-header">
        <SelectInput
          label="Field Type"
          value={newFieldType}
          options={[
            { label: "Text", value: "text" },
            { label: "Select", value: "select" },
          ]}
          onChange={(value) => setNewFieldType(value)}
        />
        <TextInput
          label="Field Label"
          value={newFieldLabel}
          onChange={(value) => setNewFieldLabel(value)}
          placeholder="Age"
          required
          error={error && !newFieldLabel ? "Please add field label" : ""}
        />
        {newFieldType === "select" && (
          <TextInput
            label="Options"
            value={optInput}
            onChange={(value) => handleOptInputChange(value)}
            placeholder="apple, banana, orange"
            helperText="Please type your options here, separated by commas, e.g., apple, banana, orange."
            required
            error={error && !optInput ? "Please options value" : ""}
          />
        )}
        <button onClick={handleAddField} className="btn">
          Add Field
        </button>
      </div>
      <div className="form-fields">
        {state.fields.map((field, index) => (
          <FormField key={index} field={field} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
