/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button, Row } from "antd";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../shcemas";
import { useAppDispatch } from "../redux/hooks";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user?.role}/dashboard`);
    } catch (err: any) {
      console.log(err);
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{height: '100vh'}}>
      <PHForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <PHInput type="text" name="id" label="ID"></PHInput>
        <PHInput type="password" name="password" label="Password"></PHInput>
        <Button htmlType="submit" style={{ width: "100%" }}>
          Login
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
