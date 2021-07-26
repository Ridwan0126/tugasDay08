import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  registerHandler = (e) => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      username: e.target[1].value,
      school: e.target[2].value,
    };
    if (!user === null) {
      this.props.addNewStudent(user);
      alert("success register");
      this.props.loginPage("login");
    } else {
      return alert("BELOM GUA BUAT COY, SORRY YAK!!!!");
    }

    e.target.name.value = "";
    e.target.username.value = "";
    e.target.school.value = "";
    console.log("ini register nbr", user);
  };

  moveToLogin = () => {
    this.props.loginPage("login");
  };

  moveToHome = (e) => {
    e.preventDefault();
    this.props.loginPage("home");
  };

  render() {
    return (
      <>
        <button className="btn1-home" onClick={this.moveToHome}>
          Home
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="App">
          <form className="form" onSubmit={this.registerHandler}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="input-group">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-group">
              <input type="text" name="gender" placeholder="Gender" />
            </div>
            <div className="input-group">
              <input type="text" name="pekerjaan" placeholder="Pekerjaan" />
            </div>
            <div className="input-group">
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="input-group"></div>
            <button className="btn1" type="submit">
              SIGN UP
            </button>
            <button className="btn1" onClick={this.moveToLogin}>
              LOGIN
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
