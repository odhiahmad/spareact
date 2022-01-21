import React, { Component } from "react";
import firebase from "../services/firebase";
import { app } from "../services/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default class Register extends Component {
  state = {};
  set = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleRegister = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    if (!email || !password) return alert("Please insert missing credentials!");
    firebase.auth.createUserWithEmailAndPassword(email, password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleRegister}>
          <input type="email" onChange={this.set("email")} />
          <input type="password" onChange={this.set("password")} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
