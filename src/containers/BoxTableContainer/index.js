import React, { Component, Fragment } from "react";
import { BoxTableRows, EmptyTable } from '../../components/BoxTables';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';

import './style.scss';

class BoxTableContainer extends Component {
  render() {
    const { boxes, isLoading } = this.props;

    if (isLoading) {
      return <Loader />
    }
    return (
      <Fragment>
        <table className="box-table">
          <tbody>
            {boxes && boxes.length > 0 && (
              <tr>
                <th>Receiver</th>
                <th>Weight</th>
                <th>Box color</th>
                <th>Shipping cost</th>
              </tr>
            )}
            {boxes && boxes.length > 0 && <BoxTableRows items={boxes} />}
            {boxes && boxes.length === 0 && <EmptyTable />}
          </tbody>
        </table>
        <div className="back-cta">
          <Link className="button secondary-button" to="/addbox">Back to Create</Link>
        </div>
      </Fragment>
    );
  }
}

export default connect(state => ({
  boxes: state.boxList,
  isLoading: state.isLoading
}))(BoxTableContainer);