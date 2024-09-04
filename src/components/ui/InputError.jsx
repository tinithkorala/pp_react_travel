import PropTypes from "prop-types";

const InputError = ({error}) => {
  return (
    <p className="form__input__error">{error}</p>
  )
}

InputError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default InputError