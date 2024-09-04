export const emptyCheck = (name, value) => {
  return value.trim().length === 0 ? `Please enter your ${name}` : "";
};

export const validateEmail = (value) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(value).toLowerCase())
    ? ""
    : "Invalid email format";
};

export const validateLength = (value, length) => {
  return value.length >= length ? "" : "Password must be at least 8 characters";
};
