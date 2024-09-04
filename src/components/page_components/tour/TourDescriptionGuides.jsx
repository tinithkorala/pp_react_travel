import PropTypes from "prop-types";
import { urlImageHelper } from "../../../utils/urlHelper";

const TourDescriptionGuides = ({guide}) => {
  let guideStage;
  if(guide.role === 'lead-guide') {
    guideStage = 'Lead guide';
  }else {
    guideStage = 'Tour guide';
  }
  return (
    <div className="overview-box__detail">
      <img
        src={urlImageHelper('users', guide.photo)}
        alt={guideStage}
        className="overview-box__img"
      />
      <span className="overview-box__label">{guideStage}</span>
      <span className="overview-box__text">{guide.name}</span>
    </div>
  );
};

TourDescriptionGuides.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default TourDescriptionGuides;
