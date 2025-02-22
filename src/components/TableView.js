import React from "react";
import "./index.css";
import CONSTANTS from "../Atoms/Constants";

const {
  LABLES: {
    RECEIVER_NAME,
    WEIGHT_KG,
    BOX_COLOR,
    DESTINATION,
    SHIPPING_COST_INR,
    NO_DATA_MESSAGE,
  },
} = CONSTANTS;

const TableView = ({ boxes }) => {
  return (
    <div className="table-container">
      <h2>Box List</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>{RECEIVER_NAME}</th>
              <th>{WEIGHT_KG}</th>
              <th>{BOX_COLOR}</th>
              <th>{DESTINATION}</th>
              <th>{SHIPPING_COST_INR}</th>
            </tr>
          </thead>
          <tbody>
            {boxes.length > 0 ? (
              boxes.map((box, index) => (
                <tr key={index}>
                  <td>{box.name}</td>
                  <td>{box.weight}</td>
                  <td>
                    <div
                      className="color-box"
                      style={{ backgroundColor: box.color }}
                    ></div>
                  </td>
                  <td>{box.country}</td>
                  <td>{box.cost.toFixed(2)} INR</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  {NO_DATA_MESSAGE}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
