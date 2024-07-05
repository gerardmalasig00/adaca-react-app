interface SelectInputProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  onChange: (e: string) => void;
}
const SelectInput = ({
  label,
  value,
  options,
  error,
  helperText,
  required,
  onChange,
}: SelectInputProps) => {
  const showHelperText = !!(error || helperText);
  return (
    <div className="form-input">
      <label className={`${required && "required"}`}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {showHelperText && (
        <>
          {error ? (
            <p className={`${error && "error"}`}>{error}</p>
          ) : (
            <p>{helperText}</p>
          )}
        </>
      )}
    </div>
  );
};

export default SelectInput;
