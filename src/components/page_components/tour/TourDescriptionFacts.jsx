import PropTypes from 'prop-types';

const TourDescriptionFacts = ({icon, label, text}) => {
  return (
    <div className="overview-box__detail">
      <svg className="overview-box__icon">
        {icon}
      </svg>
      <span className="overview-box__label">{label}</span>
      <span className="overview-box__text">{text}</span>
    </div>
  );
};

TourDescriptionFacts.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
}

export default TourDescriptionFacts;
