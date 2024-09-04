import PropTypes from "prop-types";

import { urlImageHelper } from "../../../utils/urlHelper";

const TourImages = ({ id, tourName, tourImage }) => {
  return (
    <div className="picture-box">
      <img
        className={`picture-box__img picture-box__img--${id}`}
        src={urlImageHelper("tours", tourImage)}
        alt={tourName}
      />
    </div>
  );
};

TourImages.propTypes = {
  id: PropTypes.number.isRequired,
  tourName: PropTypes.string.isRequired,
  tourImage: PropTypes.string.isRequired,
};

export default TourImages;
