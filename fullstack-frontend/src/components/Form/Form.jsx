import "./Form.scss";
import { useState } from "react";

const Form = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [location, setLocation] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(location).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    handleSubmit(location);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="location"
          value={location.location}
          onInput={(event) =>
            setLocation({ ...location, location: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="country"
          value={location.country}
          onInput={(event) =>
            setLocation({ ...location, country: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="image url"
          value={location.image}
          onInput={(event) =>
            setLocation({ ...location, image: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="description"
          value={location.description}
          onInput={(event) =>
            setLocation({ ...location, description: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="type"
          value={location.type}
          onInput={(event) =>
            setLocation({ ...location, type: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="climate"
          value={location.climate}
          onInput={(event) =>
            setLocation({ ...location, climate: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="price"
          value={location.price}
          onInput={(event) =>
            setLocation({ ...location, price: event.target.value })
          }
        />
        <button className="form-container__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
