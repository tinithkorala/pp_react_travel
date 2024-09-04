import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import whiteLogo from "./../../../assets/logos/logo-white.png";

import { urlImageHelper } from "../../../utils/urlHelper";
import { getIsAuth } from "../../../features/authSlice";
import { tourCheckout } from "../../../features/thunks/booking.thunk";
import {
  getBookingCheckoutData,
  getBookingStatus,
} from "../../../features/bookingSlice";
import { useEffect } from "react";
import { REQUEST_STATUS } from "../../../configs/constants";

const TourCta = ({ tourName, duration, tourImages }) => {
  const dispatch = useDispatch();
  const { tourId } = useParams();

  const isAuth = useSelector(getIsAuth);
  const bookingStatus = useSelector(getBookingStatus);
  const checkoutData = useSelector(getBookingCheckoutData);

  // Derived state
  const stripeUrl = checkoutData?.url;

  useEffect(() => {
    if (stripeUrl) {
      window.location.href = stripeUrl;
    }
  }, [bookingStatus, stripeUrl]);

  const handleCheckout = async () => {
    dispatch(tourCheckout(tourId));
  };

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src={whiteLogo} alt="Natours logo" className="" />
        </div>
        {tourImages.slice(0, 2).map((el, index) => (
          <img
            src={urlImageHelper("tours", el)}
            alt={tourName}
            className={`cta__img cta__img--${index + 1}`}
            key={index}
          />
        ))}

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          {isAuth ? (
            <button
              className="btn btn--green span-all-rows"
              onClick={handleCheckout}
            >
              {bookingStatus === REQUEST_STATUS.LOADING
                ? "Loading Stripe Checkout"
                : "Book tour now!"}
            </button>
          ) : (
            <Link to="/sign-in" className="btn btn--green span-all-rows">
              Login to book tour
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

TourCta.propTypes = {
  tourName: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  tourImages: PropTypes.array.isRequired,
};

export default TourCta;
