import React, { Component } from "react";

export default class StudentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent() {
    const { id } = this.props.student;
    this.props.deleteStudent(id);
  }
  editStudent() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
  }
  editStudentSubmit() {
    const { id } = this.props.student;
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
    this.props.editStudentSubmit(
      id,
      this.nameInput.value,
      this.usernameInput.value,
      this.schoolInput.value
    );
  }
  render() {
    const { name, username, gender, pekerjaan } = this.props.student;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>
          <input
            ref={(nameInput) => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            defaultValue={username}
            ref={(usernameInput) => (this.usernameInput = usernameInput)}
          />
        </td>
        <td>
          <input
            ref={(schoolInput) => (this.schoolInput = schoolInput)}
            defaultValue={gender}
          />
        </td>
        <td>
          <i className="far fa-save" onClick={this.editStudentSubmit}></i>
        </td>
        <td>
          <i className="fas fa-trash"></i>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{name}</td>
        <td>{username}</td>
        <td>{gender}</td>
        <td>{pekerjaan}</td>
        <td>
          <button className="far fa-edit" onClick={this.editStudent}>
            Edit
          </button>
          <button>Delete</button>
          <i className="far fa-edit" onClick={this.editStudent}></i>
        </td>
      </tr>
    );
  }
}
