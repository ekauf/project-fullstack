import "./Form.scss";

const Form = () => {

    return (
        <div className="form-container">
            <h2 className="form-container__title">Form</h2>
            <form className="form-container__form" action="">
                <input className="form-container__input" type="text" placeholder="location" value={} onInput={} />
                <input className="form-container__input" type="text" placeholder="country" value={} onInput={} />
                <input className="form-container__input" type="text" placeholder="image url" value={} onInput={} />
                <input className="form-container__input" type="text" placeholder="description" value={} onInput={} />
                <input className="form-container__input" type="text" placeholder="type" value={} onInput={} />
                <input className="form-container__input" type="text" placeholder="climate" value={} onInput={} />
                <input className="form-container__input" type="text" placeholder="price" value={} onInput={} />
                <button className="form-container__button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;