import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getModule } from "../../redux/module/redux/getModule";

function ModuleTable(props) {
  const data = props.data;

  return (
    <ul className="nav" style={{ width: 205 }}>
      <li key="0" className="nav-item">
        <Link to="/" className="nav-link">
          <i className="nav-icon cui-home"></i>Trang chủ
        </Link>
      </li>
      {SetModuleTable(undefined, data, 0)}
    </ul>
  );
}

function SetModuleTable(content, data, parentId = 0) {
  const items =
    parentId > 0
      ? data.filter(e => {
          return e.parentId === parentId && e.id !== e.parentId;
        })
      : data.filter(e => {
          return e.id === e.parentId;
        });
  if (items) {
    items.forEach(el => {
      const ul =
        data.filter(e => {
          return e.parentId === el.id && e.id !== e.parentId;
        }).length > 0;
      content = (
        <li key={el.id} className={ul ? "nav-item nav-dropdown" : "nav-item"}>
          {el.link !== "#" ? (
            <Link
              to={el.link}
              className={ul ? "nav-dropdown-toggle nav-link" : "nav-link"}
            >
              <i className={el.icon}></i>
              {el.title}
            </Link>
          ) : (
            <a className={ul ? "nav-dropdown-toggle nav-link" : "nav-link"}>
              <i className={el.icon}></i>
              {el.title}
            </a>
          )}

          {ul ? (
            <ul className="nav-dropdown-items">
              {SetModuleTable(content, data, el.id)}
            </ul>
          ) : (
            SetModuleTable(content, data, el.id)
          )}
        </li>
      );
    });
  }

  return content;
}

export class Module extends Component {
  state = {};

  componentDidMount() {
    this.props.getModule(1);
  }

  render() {
    const { modules } = this.props;
    console.log("render", this.props);
    return (
      <ul className="sidebar">
        <nav className="sidebar-nav" id="module">
          <ModuleTable data={modules} />
        </nav>
      </ul>
    );
  }
}

const mapStateToProp = state => {
  return {
    modules: state.getModule.modules
  };
};

const mapDispatchToProp = {
  getModule
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Module);
