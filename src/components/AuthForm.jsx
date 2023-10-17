import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { setUser } from "../redux/features/authSlice";
import { loginFormData } from "../data/staticData";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  error: "",
};

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [values, setValues] = useState(initialState);
  const { email, password, error } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createAccount = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { uid, email: userEmail } = user;
      const serializedUser = { uid, email: userEmail };
      dispatch(setUser(serializedUser));
      setValues(initialState);
    } catch (error) {
      setValues({ ...values, error: error.message });
    }
  };

  const logIn = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid, email: userEmail } = user;
      const serializedUser = { uid, email: userEmail };
      console.log(serializedUser);
      dispatch(setUser(serializedUser));
      setValues(initialState);
    } catch (error) {
      setValues({ ...values, error: error.message });
    }
  };

  const handleAuthClick = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setValues({ ...values, error: "Please input an email and password." });
      return;
    }
    if (isLogin) {
      logIn();
    } else {
      createAccount();
    }
    navigate("/");
  };

  return (
    <div className="flex h-[calc(100vh-60px)] items-center justify-center">
      <form className="flex flex-col items-center justify-center gap-[10px] rounded-xl bg-white p-[20px]">
        <h3 className="mb-[10px] text-xl font-bold">
          {isLogin ? "Log in" : "Create an account"}
        </h3>
        {loginFormData.map((el) => {
          return (
            <div
              key={el.id}
              className="mb-[10px] flex flex-col items-start gap-[5px]"
            >
              <label className="font-bold" htmlFor={el.name}>
                {el.title}:
              </label>
              <input
                className="input"
                id={el.name}
                type={el?.type}
                placeholder={el?.title}
                name={el?.name}
                value={values[el?.name]}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <Button onClick={handleAuthClick}>
          {isLogin ? "Log in" : "Create an account"}
        </Button>
        {error && <p className="text-sm font-bold text-red-400">{error}</p>}
        <p
          className="mt-[10px] cursor-pointer text-sm font-bold text-yellow"
          onClick={() => setIsLogin((p) => !p)}
        >
          {isLogin ? "Create new account!" : "Already have an account!"}
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
