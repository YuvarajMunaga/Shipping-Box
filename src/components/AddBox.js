import React, { useState } from "react";
import "./index.css";
import CONSTANTS from "../Atoms/Constants"; // Import constants

const AddBox = ({ addBox }) => {
  const {
    DESTINATION_RATES,
    FORM_INITIAL_STATE,
    ERROR_MESSAGES: { REQUIRED_FIELDS, NEGATIVE_WEIGHT },
    LABLES: { SELECT_COLOR, SELECT_COUNTRY, SAVE_BUTTON, ADD_SHIPPING_BOX },
  } = CONSTANTS;

  const [form, setForm] = useState(FORM_INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.weight || !form.country) {
      setError(REQUIRED_FIELDS);
      return;
    }
    if (parseFloat(form.weight) < 0) {
      setForm({ ...form, weight: "0" });
      setError(NEGATIVE_WEIGHT);
      return;
    }
    addBox({
      ...form,
      weight: parseFloat(form.weight),
      cost: parseFloat(form.weight) * DESTINATION_RATES[form.country],
    });
    setForm(FORM_INITIAL_STATE);
    setError("");
  };

  return (
    <div className="add-box-container">
      <h2>{ADD_SHIPPING_BOX}</h2>
      <form onSubmit={handleSubmit} className="box-form">
        <input
          type="text"
          name="name"
          placeholder="Receiver Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={form.weight}
          onChange={handleChange}
        />

        <select name="country" value={form.country} onChange={handleChange}>
          <option value="" disabled>
            {SELECT_COUNTRY}
          </option>
          {Object.keys(DESTINATION_RATES).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className="color-container">
          <p className="color-name">{SELECT_COLOR}</p>
          <input
            type="color"
            name="color"
            value={form.color}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{SAVE_BUTTON}</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddBox;
