import React from "react";
import { useNavigate } from "react-router-dom";


class AddContact extends React.Component {

  goBack = () => {
    this.props.navigate("/");
  }
  goBackContact = () => {
    this.props.navigate("/contact");
  }

  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Don't leave it blank!");
      return;
    } 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(this.state.email)) {
      alert("Please enter a valid email address");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    
    
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
          <button type="button" onClick={this.goBack} className="ui button green">GoBack</button>

        </form>
      </div>
    );
  }
}

export default AddContact;
