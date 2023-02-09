import "./LocationList.scss";
import Location from "../Location/Location";
import { Link } from "react-router-dom";

const LocationList = ({ locations }) => {
  return (
    <>
      <div className="location-list">
        {locations.map((location) => (
          <Link key={location.id} to={`/location/edit/${location.id}`}>
            <Location
              key={location.id}
              location={location.location}
              country={location.country}
              image={location.image}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default LocationList;
