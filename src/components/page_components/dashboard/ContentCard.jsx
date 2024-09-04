import PropTypes from "prop-types";

const ContentCard = ({children}) => {
  return <div className="user-view__content">{children}</div>;
};

ContentCard.propTypes = {
  children: PropTypes.node,
};

export default ContentCard;
