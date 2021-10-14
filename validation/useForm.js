import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/user/userSlice";
import { useRouter } from "next/router";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
    name: "",
    surname: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(signup(values));
      router.push("/");
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
