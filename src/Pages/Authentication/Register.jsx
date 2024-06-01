import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
