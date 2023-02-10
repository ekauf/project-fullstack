import "./CreateLocation";
import Form from "../../components/Form/Form";

const CreateLocation = () => {
  const handleSubmit = async (location) => {
    await fetch("http://localhost:8080/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    });
  };

  const defaultFormState = {
    location: "",
    country: "",
    image: "",
    description: "",
    type: "",
    climate: "",
    price: "",
  };

  return (
    <section className="create-location">
      <h2>Add a Location</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add a New Location"
      />
    </section>
  );
};

export default CreateLocation;
