import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { SlCalender } from "react-icons/sl";
import { BiTrendingUp } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";

import { API_URLS } from "../../configs/constants";
import TourHeader from "../../components/page_components/tour/TourHeader";
import TourDescription from "../../components/page_components/tour/TourDescription";
import { formatDateMMYYYY } from "../../utils/formatHelper";
import TourImages from "../../components/page_components/tour/TourImages";
import TourReviewCard from "../../components/page_components/tour/TourReviewCard";
import TourCta from "../../components/page_components/tour/TourCta";
import NotFoundError from "../../components/ui/NotFoundError";

const Tour = () => {
  let { tourId } = useParams();

  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = API_URLS.TOURS.BASE + "/" + tourId;
        const response = await fetch(url);
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(`Failed to fetch tours: ${errorResponse.message}`);
        }
        const data = await response.json();
        setTourData(data.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [tourId]);

  console.log(tourData);

  let content;

  if (tourData.length != 0) {
    content = (
      <>
        <TourHeader
          tourName={tourData.name}
          tourImage={tourData.imageCover}
          duration={tourData.duration}
          startLocation={tourData.startLocation.description}
        />
        <TourDescription
          quickFacts={[
            {
              icon: <SlCalender />,
              label: "Next date",
              text: formatDateMMYYYY(tourData.startDates[0]),
            },
            {
              icon: <BiTrendingUp />,
              label: "Difficulty",
              text: tourData.difficulty,
            },
            {
              icon: <BsFillPeopleFill />,
              label: "Participants",
              text: tourData.maxGroupSize,
            },
            {
              icon: <RiStarSFill />,
              label: "Rating",
              text: tourData.ratingsAverage + " / 5",
            },
          ]}
          guides={tourData.guides}
          tourName={tourData.name}
          tourDescription={tourData.description}
        />
        <section className="section-pictures">
          {tourData.images.map((el, index) => (
            <TourImages
              key={index}
              id={index + 1}
              tourName={tourData.name}
              tourImage={el}
            />
          ))}
        </section>
        <TourReviewCard reviews={tourData.reviews} />
        <TourCta
          tourName={tourData.name}
          duration={tourData.duration}
          tourImages={tourData.images}
        />
      </>
    );
  }

  return (
    <div>
      {isLoading && "Loading..."}
      {error && <NotFoundError message={error} />}
      {content}
    </div>
  );
};

export default Tour;
