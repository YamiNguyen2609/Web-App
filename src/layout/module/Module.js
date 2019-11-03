import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getData } from "../../redux/app/redux/handle";

export class Module extends Component {
  state = {};

  componentDidMount() {
    this.props.getData("Module", { userId: 1 });
  }

  render() {
    const { modules } = this.props;

    return (
      <ul className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            {modules.map(e => {
              return (
                <li className="nav-item">
                  <Link to={e.link} className="nav-link">
                    <i className="nav-icon icon-speedometer"></i> e.title
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </ul>
    );
  }
}

const mapStateToProp = state => ({
  modules: state.handle.data
});

const mapDispatchToProp = {
  getData
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Module);
