import "./ViewLocations.scss";
import LocationList from "../../components/LocationList/LocationList";
import Select from "../../components/Select/Select";
import { useEffect, useState } from "react";

const ViewLocations = () => {
  const [locations, setLocations] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const getLocations = async (country) => {
    let url = "http://localhost:8080/locations";

    if (country) {
      url += `?countryName=${country}`;
    }

    const response = await fetch(url);
    const locationData = await response.json();
    setLocations(locationData);
  };

  const getCountries = async () => {
    const response = await fetch("http://localhost:8080/locations/countries");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
    getLocations(selectedCountry);
  }, [selectedCountry]);

  const handleSelectedCountry = (event) =>
    setSelectedCountry(event.target.value);

  return (
    <section className="view-locations">
      <h2 className="view-locations__title">Places</h2>
      <form className="view-locations__form">
        <Select
          options={countries}
          onChange={handleSelectedCountry}
          label="countries"
          labelText="Select a Country: "
        />
      </form>
      <LocationList locations={locations} />
    </section>
  );
};

export default ViewLocations;
