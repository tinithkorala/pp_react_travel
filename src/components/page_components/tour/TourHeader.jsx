import PropTypes from "prop-types";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";

import { urlImageHelper } from "../../../utils/urlHelper";

const TourHeader = ({ tourName, tourImage, duration, startLocation }) => {
  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">
          <img
            src={urlImageHelper("tours", tourImage)}
            alt={tourName}
            className="header__hero-img"
          />
        </div>
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{tourName}</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <AiOutlineClockCircle />
            </svg>
            <span className="heading-box__text">{duration} days</span>
          </div>
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <BsFillPinMapFill />
            </svg>
            <span className="heading-box__text">{startLocation}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

TourHeader.propTypes = {
  tourName: PropTypes.string.isRequired,
  tourImage: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  startLocation: PropTypes.string.isRequired,
};

export default TourHeader;
