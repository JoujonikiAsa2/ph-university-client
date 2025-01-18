import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ width: "100%" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => 
          <Form.Item>
            <Input {...field} type={type} id={name} />
           {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        }
      />
    </div>
  );
};

export default PHInput;
