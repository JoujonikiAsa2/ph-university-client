import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../shcemas";
import { toast } from "sonner";
import { useAddAcademicFacultyMutation } from "../../../redux/features/academicManagement/academicManagementApi";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation(undefined);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating academic faculty");

    try {
      const res = await addAcademicFaculty(data);
      console.log(res);
      if (res.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch (error) {
      console.error("Error occurred here:", error);
      toast.error("", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHInput type="text" name="name" label="Name"></PHInput>
          <Button htmlType="submit" style={{ width: "100%" }}>
            Create
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
