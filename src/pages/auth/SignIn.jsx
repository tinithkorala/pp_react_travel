import { useEffect, useState } from "react";
import { validateEmail, validateLength } from "../../utils/validationHelper";
import InputError from "../../components/ui/InputError";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/thunks/auth.thunk";
import {
  getError,
  getIsAuth,
  getStatus,
  resetStatus,
} from "../../features/authSlice";
import { REQUEST_STATUS } from "../../configs/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(getIsAuth);
  const authStatus = useSelector(getStatus);
  const authError = useSelector(getError);

  useEffect(() => {
    if (isAuth && authStatus === REQUEST_STATUS.SUCCEEDED) {
      navigate("/");
      dispatch(resetStatus());
    }

    if (!isAuth && authStatus === REQUEST_STATUS.FAILED) {
      toast.error(authError);
    }
  }, [isAuth, authStatus, authError, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputErrors, setInputErrors] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedErrors = { ...inputErrors };

    switch (name) {
      case "email":
        setEmail(value);
        updatedErrors.email = validateEmail(value);
        break;
      case "password":
        setPassword(value);
        updatedErrors.password = validateLength(value, 8);
        break;
      default:
        break;
    }

    setInputErrors(updatedErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }));
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form form--login" onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form__input"
              type="email"
              placeholder="you@example.com"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            {inputErrors.email && <InputError error={inputErrors.email} />}
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {inputErrors.password && (
              <InputError error={inputErrors.password} />
            )}
          </div>
          <div className="form__group">
            <button className="btn btn--green">
              {authStatus === REQUEST_STATUS.LOADING ? "Login..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
