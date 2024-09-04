import PropTypes from "prop-types";
import TourDescriptionFacts from "./TourDescriptionFacts";
import TourDescriptionGuides from "./TourDescriptionGuides";

const TourDescription = ({ quickFacts, guides, tourName, tourDescription }) => {
  let quickFactsContent = quickFacts.map((el, index) => (
    <TourDescriptionFacts
      key={index}
      icon={el.icon}
      label={el.label}
      text={el.text}
    />
  ));

  let guideContent = guides.map((el, index) => (
    <TourDescriptionGuides key={index} guide={el} />
  ));

  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            {quickFactsContent}
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            {guideContent}
          </div>
        </div>
      </div>

      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">
          About {tourName}
        </h2>
        <p className="description__text">
          {tourDescription}
        </p>
      </div>
    </section>
  );
};

TourDescription.propTypes = {
  quickFacts: PropTypes.array.isRequired,
  guides: PropTypes.array.isRequired,
  tourName: PropTypes.string.isRequired,
  tourDescription: PropTypes.string.isRequired,
};

export default TourDescription;
