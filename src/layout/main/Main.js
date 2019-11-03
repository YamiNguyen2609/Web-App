import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import RenderMain from "./components/RenderMain";

export class Main extends Component {
  render() {
    const { modules } = this.props;

    return (
      <main className="main" id="main">
        <ol className="breadcrumb">
          <li key={"1"} className="breadcrumb-item">
            Home
          </li>
          <li key={"2"} className="breadcrumb-item">
            <a href="#">Admin</a>
          </li>
          <li key={"3"} className="breadcrumb-item active">
            Dashboard
          </li>
        </ol>
        <div className="container-fluid" id="main">
          <Switch>
            <Route path="/">
              <RenderMain component="Home" name="Trang chủ" />
            </Route>
            {modules.map(e => {
              return (
                <Route path={e.link}>
                  <RenderMain component={e.controller} name={e.title} />
                </Route>
              );
            })}
          </Switch>
        </div>
      </main>
    );
  }
}

const mapStateToProp = state => ({
  modules: state.handle.data
});

const mapDispatchToProp = {};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Main);
