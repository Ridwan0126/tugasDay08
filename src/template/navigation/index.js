import React, { Component } from "react";
import { Menu } from "../../component";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkActivePage = (activePage) => {
    const page = this.props.page;

    if (activePage === page) return "active";

    return "";
  };

  render() {
    const { goToPage } = this.props;
    return (
      <div className="nav">
        {/* <Menu
          isActivePage={this.checkActivePage("home")}
          redirect={() => goToPage("home")}
        >
          Home
        </Menu> */}
        {/* <Menu
          isActivePage={this.checkActivePage("login")}
          redirect={() => goToPage("login")}
        >
          Login
        </Menu> */}
        {/* <Menu
          isActivePage={this.checkActivePage("register")}
          redirect={() => goToPage("register")}
        >
          Register
        </Menu> */}
        {/* <Menu
          isActivePage={this.checkActivePage("userList")}
          redirect={() => goToPage("userList")}
        >
          User List
        </Menu> */}
      </div>
    );
  }
}

export default Nav;
