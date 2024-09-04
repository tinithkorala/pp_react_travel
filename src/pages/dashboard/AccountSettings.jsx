import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import defaultUserIcon from "./../../assets/icons/default.jpg";

import {
  getError,
  getStatus,
  getUser,
  resetStatus,
} from "../../features/authSlice";
import { urlImageHelper } from "../../utils/urlHelper";
import {
  updateProfile,
  updateUserPassword,
} from "../../features/thunks/auth.thunk";
import { REQUEST_STATUS } from "../../configs/constants";

const AccountSettings = () => {
  const dispatch = useDispatch();

  const authUser = useSelector(getUser);
  const authError = useSelector(getError);
  const authStatus = useSelector(getStatus);

  useEffect(() => {
    setUser((prevState) => ({
      ...prevState,
      previewPhoto: authUser.photo,
    }));
  }, [authUser]);

  useEffect(() => {
    if (authStatus === REQUEST_STATUS.SUCCEEDED) {
      toast.success("Successfully updated");
      dispatch(resetStatus());
    }

    if (authStatus === REQUEST_STATUS.FAILED) {
      toast.error(authError);
    }
  }, [authStatus, authError, dispatch]);

  const fileInputRef = useRef(null);

  const [user, setUser] = useState({
    name: authUser.name,
    email: authUser.email,
    previewPhoto: authUser.photo,
    photo: "",
  });
  const [passwordData, setPasswordData] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  const profileImg = user.previewPhoto
    ? urlImageHelper("users", user.previewPhoto)
    : defaultUserIcon;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUser((prevState) => ({
      ...prevState,
      photo: file,
    }));
  };

  const handleProfileOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("photo", user.photo);
    dispatch(updateProfile(formData));
  };

  const handlePasswordInputChange = (event) => {
    const { name, value } = event.target;
    setPasswordData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Password not match");
      return;
    }
    dispatch(updateUserPassword(passwordData));
  };

  return (
    <>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
        <form className="form form-user-data" onSubmit={handleProfileOnSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form__input"
              type="text"
              value={user.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              className="form__input"
              type="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group form__photo-upload">
            <img
              className="form__user-photo"
              src={profileImg}
              alt="User photo"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
            <button className="btn-text" onClick={handleImageClick}>
              Choose new photo
            </button>
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green">Save settings</button>
          </div>
        </form>
      </div>
      <div className="line">&nbsp;</div>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form
          className="form form-user-settings"
          onSubmit={handlePasswordSubmit}
        >
          <div className="form__group">
            <label className="form__label" htmlFor="password-current">
              Current password
            </label>
            <input
              id="password-current"
              name="passwordCurrent"
              value={passwordData.currentPassword}
              onChange={handlePasswordInputChange}
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              New password
            </label>
            <input
              id="password"
              name="password"
              value={passwordData.newPassword}
              onChange={handlePasswordInputChange}
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              id="password-confirm"
              name="passwordConfirm"
              value={passwordData.confirmPassword}
              onChange={handlePasswordInputChange}
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green">Save password</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountSettings;
