import React, { Component } from "react";
import { connect } from "react-redux";

import { Images } from "../../themes";
import { logout } from "../../redux/user/redux/loginWithEmail";

export class Header extends Component {
  _onPressLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;
    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler sidebar-toggler d-lg-none mr-auto"
          type="button"
          data-toggle="sidebar-show"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand" href="#">
          YAMI SOFT
        </span>
        <button
          className="navbar-toggler sidebar-toggler d-md-down-none"
          type="button"
          data-toggle="sidebar-lg-show"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav navbar-nav ml-auto mr-2">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>{user.fullName}</span>
              <img
                className="img-avatar"
                src={Images.avatar}
                alt="admin@bootstrapmaster.com"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header text-center">
                <strong>Account</strong>
              </div>
              <a
                className="dropdown-item"
                onClick={() => {
                  this._onPressLogout();
                }}
              >
                <i className="icons cui-account-logout"></i>
                Đăng xuất
              </a>
            </div>
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProp = state => ({
  user: state.loginWithEmail.user
});

const mapDispatchToProp = {
  logout
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Header);
