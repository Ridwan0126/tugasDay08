import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  moveToLogin = (e) => {
    e.preventDefault();
    this.props.loginPage("login");
  };
  moveToRegister = (e) => {
    e.preventDefault();
    this.props.loginPage("register");
  };

  render() {
    const photo = "";
    return (
      <>
        <div id="buton">
          <button className="btn1-hov" onClick={this.moveToLogin}>
            LOGIN
          </button>
          <button className="btn1-hov" onClick={this.moveToRegister}>
            REGISTER
          </button>
        </div>
        <div className="Appp"></div>
        <div className="pag">
          <h1 className="nnv">Bootcamp</h1>

          <p>
            Nama : Muhamad Nur Ridwan <br />
            <br />
            Kelas : Bootcamp 3 Mei 2021 <br />
            <br />
            Instruktur : Wawan S. <br />
            <br />
            Materi : Html, Css dan JavaScript <br />
          </p>
        </div>
      </>
    );
  }
}

export default Home;
