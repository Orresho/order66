import React, { Fragment } from "react";

/**
 * Table rows for desktop view
 * @param {array} items List of items
 */
export const BoxTableRows = ({ items }) => (
  <Fragment>
    {items &&
      items.map((item, index) => (
        <tr className="box-table-row" key={index}>
          <td>{item.name}</td>
          <td>{item.weight}</td>
          <td style={{ background: item.color }}>{item.color}</td>
          <td>{item.shippingCost}</td>
        </tr>
      ))}
  </Fragment>
);

/**
 * Table row for when there is no data to be shown
 */
export const EmptyTable = () => (
  <tr>
    <td><h2>No data found</h2></td>
  </tr>
);

