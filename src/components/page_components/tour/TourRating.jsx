import PropTypes from "prop-types";
import { LiaStarSolid } from "react-icons/lia";

const TourRating = ({ reviewRating }) => {
  return (
    <div className="reviews__rating">
      {[1, 2, 3, 4, 5].map((el, index) => (
        <svg className="reviews__star" key={index}>
          <LiaStarSolid className={`reviews__star--${el <= reviewRating ? 'active' : 'inactive'}`}  />
        </svg>
      ))}
    </div>
  );
};

TourRating.propTypes = {
  reviewRating: PropTypes.number.isRequired,
};

export default TourRating;
