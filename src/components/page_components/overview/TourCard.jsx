import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoFlagSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { formatDateMMYYYY } from "../../../utils/formatHelper";
import { Link } from "react-router-dom";
import { urlImageHelper } from "../../../utils/urlHelper";

const TourCard = ({ tour }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img src={urlImageHelper('tours', tour.imageCover)} alt={tour.name} className="card__picture-img" />
        </div>
        <h3 className="heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">
          {tour.difficulty} {`${tour.duration}-day tour`}
        </h4>
        <p className="card__text">{tour.summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <CiLocationOn />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <SlCalender />
          </svg>
          <span>{formatDateMMYYYY(tour.startDates[0])}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <IoFlagSharp />
          </svg>
          <span>{tour.locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <BsFillPeopleFill />
          </svg>
          <span>{tour.maxGroupSize} people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${tour.price}</span>
          <span className="card__footer-text"> per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{tour.ratingsAverage}</span>
          <span className="card__footer-text"> rating ({tour.ratingsQuantity})</span>
        </p>
        <Link to={`/tour/${tour._id}`} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  tour: PropTypes.object.isRequired,
};

export default TourCard;
