import PropTypes from "prop-types";

import { urlImageHelper } from "../../../utils/urlHelper";
import TourRating from "./TourRating";

const TourReview = ({
  reviewerName,
  reviewerImage,
  reviewText,
  reviewRating,
}) => {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={urlImageHelper("users", reviewerImage)}
          alt={reviewerName}
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{reviewerName}</h6>
      </div>
      <p className="reviews__text">{reviewText}</p>
      <TourRating reviewRating={reviewRating} />
    </div>
  );
};

TourReview.propTypes = {
  reviewerName: PropTypes.string.isRequired,
  reviewerImage: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  reviewRating: PropTypes.number.isRequired,
};

export default TourReview;
