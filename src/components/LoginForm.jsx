import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { setUser } from "../redux/features/authSlice";
import { loginFormData } from "../data/staticData";
import Container from "./Container";

const initialState = {
  email: "",
  password: "",
  error: "",
};

function LoginForm() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const { email, password, error } = values;

  const createAccount = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { uid, email: userEmail } = user;
      const serializedUser = { uid, email: userEmail };
      dispatch(setUser(serializedUser));
    } catch (error) {
      setValues({ ...values, error: error.message });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex h-screen flex-col items-center justify-center gap-[10px] bg-green-400">
      {loginFormData.map((el) => {
        return (
          <div key={el.id} className="flex flex-col items-start gap-[5px] ">
            <label className="font-bold">{el.title}:</label>
            <input
              className="w-[300px] border-transparent p-[5px] outline-none focus:border-yellow md:w-[400px]"
              type={el?.type}
              placeholder={el?.title}
              name={el?.name}
              value={values[el?.name]}
              onChange={handleChange}
            />
          </div>
        );
      })}

      <button onClick={createAccount}>Create Account</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
