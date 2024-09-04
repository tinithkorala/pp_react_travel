import { useEffect, useState } from "react";

import {
  INITIAL_USER as INITIAL_USER,
  REQUEST_STATUS,
} from "../../configs/constants";
import {
  emptyCheck,
  validateEmail,
  validateLength,
} from "../../utils/validationHelper";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/thunks/auth.thunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getError,
  getIsAuth,
  getStatus,
  resetStatus,
} from "../../features/authSlice";

const SignUp = () => {
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

  const [userData, setUserData] = useState(INITIAL_USER);
  const [inputErrors, setInputErrors] = useState({});

  const handleStateUpdate = (name, value) => {
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInputValidate = (name, value) => {
    switch (name) {
      case "name":
        return emptyCheck(name, value);
      case "email":
        return validateEmail(value);
      case "password":
        return validateLength(value, 8);
      case "passwordConfirm":
        return validateLength(value, 8);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedErrors = { ...inputErrors };
    updatedErrors[name] = handleInputValidate(name, value);
    setInputErrors(updatedErrors);

    handleStateUpdate(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(userData));
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create your account!</h2>
        <form className="form form--signup" onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Your name
            </label>
            <input
              className="form__input"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              type="text"
              placeholder=""
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="passwordConfirm">
              Confirm password
            </label>
            <input
              className="form__input"
              id="passwordConfirm"
              name="passwordConfirm"
              value={userData.passwordConfirm}
              onChange={handleInputChange}
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green">Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
