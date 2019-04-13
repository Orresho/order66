import React, { Component, Fragment } from "react";
import { BoxTableRows, EmptyTable } from '../../components/BoxTables';
import { Link } from 'react-router-dom';

import './style.scss';

class BoxTableContainer extends Component {


  componentDidMount() {
    // dispatch action fetching data and then we retrieve from redux store
  }

  render() {
    const items = [
      {
        name: "some box 1",
        weight: 55,
        boxColor: "#dedede",
        shippingCost: "5000"
      },
      {
        name: "some box 2",
        weight: 55,
        boxColor: "#dedede",
        shippingCost: "2000"
      },
      {
        name: "some box 3",
        weight: 55,
        boxColor: "#dedede",
        shippingCost: "4000"
      },
    ]
    return (
      <Fragment>
        <table className="box-table">
          <tbody>
            <tr>
              <th>Receiver</th>
              <th>Weight</th>
              <th>Box color</th>
              <th>Shipping cost</th>
            </tr>
            {items && items.length > 0 && <BoxTableRows items={items} />}
            {items && items.length === 0 && <EmptyTable />}
          </tbody>
        </table>
        <Link className="button secondary-button" to="/addbox">Back to Create</Link>
      </Fragment>
    );
  }
}

export default BoxTableContainer;