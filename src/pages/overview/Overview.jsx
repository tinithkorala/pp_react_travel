import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  selectAllTours,
  getToursStatus,
  getToursError,
  fetchAllTours,
} from "../../features/tourSlice";
import { REQUEST_STATUS } from "../../configs/constants";
import TourCard from "../../components/page_components/overview/TourCard";
import NotFoundError from "../../components/ui/NotFoundError";

const Overview = () => {
  const dispatch = useDispatch();

  const tours = useSelector(selectAllTours);
  const toursStatus = useSelector(getToursStatus);
  const tourError = useSelector(getToursError);

  useEffect(() => {
    if (toursStatus === REQUEST_STATUS.IDLE) {
      dispatch(fetchAllTours());
    }
  }, [toursStatus, dispatch]);

  let content;

  if (toursStatus === REQUEST_STATUS.IDLE) {
    content = <p>Loading...</p>;
  } else if (toursStatus === REQUEST_STATUS.SUCCEEDED) {
    content = tours.map((tour) => <TourCard key={tour._id} tour={tour} />);
  } else if(toursStatus === REQUEST_STATUS.FAILED) {
    content = <NotFoundError message={tourError} /> ;
  }

  return (
    <main className="main">
      <div className="card-container">{content}</div>
    </main>
  );
};

export default Overview;
