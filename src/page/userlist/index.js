import React, { Component } from "react";
import "./userlist.css";
import StudentList from "./StudentList.jsx";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataList,
    };
    console.log("inidata :", this.state);
  }

  moveToLogin = () => {
    this.props.loginPage("login");
    return alert("logout");
  };

  render() {
    const { dataList } = this.props;

    return (
      <>
        <button className="btn1" onClick={this.moveToLogin}>
          LOGOUT
        </button>
        <br />
        <br />

        <h1>List Data</h1>
        <button className="btn1" onClick={this.addNewStudent}>
          Add New
        </button>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Data"
          title="Type in a name"
        />
        <table border="0" id="employeeList" className="tbl">
          <thead className="tbl-header">
            <tr>
              <th width="300px">Name</th>
              <th width="250px">Username</th>
              <th width="150px">Gender</th>
              <th width="250px">Pekerjaan</th>
              <th width="248px">Action</th>
            </tr>
          </thead>
          <StudentList studentList={dataList} />
        </table>
        <div id="demo" className="pagination">
          <span>Prev</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>Next</span>
        </div>
      </>
    );
  }
}

export default UserList;
