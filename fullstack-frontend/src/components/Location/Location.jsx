import "./Location.scss";

const Location = ({ image, location, country }) => {
  return (
    <div className="location">
      <img className="location__image" src={image} alt="location" />
      <div className="location__details">
        <h4 className="location__details__title">
          {location} , {country}
        </h4>
      </div>
    </div>
  );
};

export default Location;
