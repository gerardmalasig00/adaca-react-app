interface TextInputProps {
  label: string;
  value: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  onChange: (e: string) => void;
}

const TextInput = ({
  label,
  value,
  placeholder,
  helperText,
  error,
  required,
  onChange,
}: TextInputProps) => {
  const showHelperText = !!(error || helperText);
  return (
    <div className="form-input">
      <label className={`${required && "required"}`}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
        placeholder={placeholder}
      />
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

export default TextInput;
