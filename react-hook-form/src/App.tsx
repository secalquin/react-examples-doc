import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  test: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("test", {
            required: { value: true, message: "This is required" },
            maxLength: { value: 2, message: "Max length are two" },
          })}
        />
        {errors.test && <span>{errors.test.message}</span>}
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
      </form>
      <DevTool control={control} />
    </>
  );
}
