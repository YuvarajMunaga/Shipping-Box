const CONSTANTS = {
  LABLES: {
    RECEIVER_NAME: "Receiver Name",
    WEIGHT_KG: "Weight (kg)",
    BOX_COLOR: "Box Color",
    DESTINATION: "Destination",
    SHIPPING_COST_INR: "Shipping Cost (INR)",
    NO_DATA_MESSAGE: "No boxes added yet",
    SELECT_COLOR: "Select Color",
    SELECT_COUNTRY: "Select a country",
    SAVE_BUTTON: "Save",
    ADD_SHIPPING_BOX: "Add Shipping Box",
  },
  ROUTES: {
    ADD_BOX: "/",
    BOX_LIST: "/list",
  },
  NAV_ITEMS: {
    ADD: "Add Box",
    LIST: "Box List",
  },
  DESTINATION_RATES: {
    Sweden: 7.35,
    China: 11.53,
    Brazil: 15.63,
    Australia: 50.09,
  },
  FORM_INITIAL_STATE: {
    name: "",
    weight: "",
    color: "#ffffff",
    country: "",
  },
  ERROR_MESSAGES: {
    REQUIRED_FIELDS: "All fields are required",
    NEGATIVE_WEIGHT: "Weight cannot be negative",
  },
};

export default CONSTANTS;
