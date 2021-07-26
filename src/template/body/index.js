import React, { Component } from "react";
import { UserList, Home, Login, Register } from "../../page";

let studentList = [
  {
    id: 1,
    name: "Ibnu Jamet",
    username: "admin1",
    gender: "male",
    pekerjaan: "Bakol Ketan",
  },
  {
    id: 2,
    name: "Nuraini",
    username: "admin2",
    gender: "female",
    pekerjaan: "Bakol Jelanta",
  },
  {
    id: 3,
    name: "Bon Bon",
    username: "admin3",
    gender: "female",
    pekerjaan: "Bakol Kebo",
  },
  {
    id: 4,
    name: "Egie Nutalion",
    username: "admin4",
    gender: "female",
    pekerjaan: "Bakol Jaran",
  },
  {
    id: 5,
    name: "Pakde Gyus",
    username: "admin5",
    gender: "female",
    pekerjaan: "Bakol Lungko",
  },
  {
    id: 6,
    name: "Mbah Sugionoto",
    username: "admin6",
    gender: "male",
    pekerjaan: "Bakol Genalmbir",
  },
  {
    id: 7,
    name: "Mbokde parmi",
    username: "admin7",
    gender: "male",
    pekerjaan: "Bakol Tupat",
  },
  {
    id: 8,
    name: "onde onde",
    username: "admin8",
    gender: "female",
    pekerjaan: "Bakol Nongko",
  },
];

// if (localStorage.getItem("students") === null)
//   localStorage.setItem("students", JSON.stringify(studentList));

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
    // this.editStudentSubmit = this.editStudentSubmit.bind(this);
    // this.deleteStudent = this.deleteStudent.bind(this);
    // this.addNewStudent = this.registerHandler.bind(this);
    console.log("isi student : ", this.state.studentList);
  }

  componentWillMount = () => {
    // studentList = JSON.parse(localStorage.getItem("students"));

    this.setState((prevState, props) => ({
      studentList: studentList,
    }));
  };

  deleteStudent = (id) => {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      let filteredStudentList = this.state.studentList.filter(
        (x) => x.id !== id
      );

      this.setState((prevState, props) => ({
        studentList: filteredStudentList,
      }));
      localStorage.setItem("students");
    }
  };
  editStudentSubmit = (id, name, username, gender, pekerjaan) => {
    let studentList = this.state.studentList.map((student) => {
      if (student.id === id) {
        student.name = name;
        student.username = username;
        student.gender = gender;
        student.pekerjaan = pekerjaan;
      }
      return student;
    });
    this.setState((prevState, props) => ({
      studentList: studentList,
    }));
    localStorage.setItem("students", JSON.stringify(studentList));
  };

  registerHandler = (newUser) => {
    console.log("data baru", newUser);
    console.log(this.state.studentList);

    let copyStudent = this.state.studentList;
    newUser.id = copyStudent.length + 1;

    copyStudent.push(newUser);

    this.setState({
      studentList: copyStudent,
    });
    // localStorage.setItem("students", JSON.stringify(copyStudent));
  };

  renderPage = () => {
    const page = this.props.page;
    const loginPage = this.props.goToPage;
    const registerPage = this.props.goToPage;
    if (page === "userList")
      return (
        <UserList
          dataList={this.state.studentList}
          deleteList={this.deleteStudent}
          editList={this.editStudentSubmit}
          loginPage={loginPage}
        />
      );

    if (page === "register")
      return (
        <Register addNewStudent={this.registerHandler} loginPage={loginPage} />
      );
    if (page === "login")
      return (
        <Login
          login={this.state.studentList}
          loginPage={loginPage}
          registerPage={registerPage}
        />
      );

    return <Home loginPage={loginPage} />;
  };

  render() {
    console.log("ini state baru", this.state);
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
