import PropTypes from "prop-types";

import TourReview from "./TourReview";

const TourReviewCard = ({ reviews }) => {
  return (
    <section className="section-reviews">
      <div className="reviews">
        {reviews.map((el, index) => (
          <TourReview
            key={index}
            reviewerName={el.user.name}
            reviewerImage={el.user.photo}
            reviewText={el.review}
            reviewRating={el.rating}
          />
        ))}
      </div>
    </section>
  );
};

TourReviewCard.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default TourReviewCard;
