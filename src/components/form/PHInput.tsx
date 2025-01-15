import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  error?: string;
};

const PHInput = ({ type, name, label, error }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name}/>}
      />
      <small>{error}</small>
    </div>
  );
};

export default PHInput;
