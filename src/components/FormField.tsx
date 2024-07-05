import { useFormContext } from "../contexts/FormContext";
import { Field } from "../contexts/interface";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

interface FormFieldProps {
  field: Field;
  index: number;
}

const FormField = ({ field, index }: FormFieldProps) => {
  const { dispatch } = useFormContext();

  const handleUpdateField = (updatedField: Field) => {
    dispatch({ type: "UPDATE_FIELD", payload: { index, field: updatedField } });
  };

  const handleRemoveField = () => {
    dispatch({ type: "REMOVE_FIELD", payload: index });
  };

  const renderField = () => {
    switch (field.type) {
      case "text":
        return (
          <TextInput
            label={field.label}
            value={field.value}
            onChange={(value) => handleUpdateField({ ...field, value })}
          />
        );
      case "select":
        return (
          <SelectInput
            label={field.label}
            value={field.value}
            onChange={(value) => handleUpdateField({ ...field, value })}
            options={field.options!}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-group">
      {renderField()}
      <button onClick={handleRemoveField} className="btn btn-danger">
        Remove
      </button>
    </div>
  );
};

export default FormField;
