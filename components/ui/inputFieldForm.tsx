import React from 'react';

interface InputFieldFormProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
}

const InputFieldForm: React.FC<InputFieldFormProps> = ({ label, value, onChange, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-class"
      />
    </div>
  );
};

export default InputFieldForm;
