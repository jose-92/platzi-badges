import React from "react";
import Navbar from "../componentes/Navbar";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../componentes/Badge";
import Badgeform from "../componentes/Badgeform";
import api from "../api";
class BadgeNew extends React.Component {
  state = {
    form: {
      FirstName: "",
      LastName: "",
      jobtittle: "",
      email: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.badges.create(this.state.form);
      this.props.history.push("/badges");
    } catch (error) {
      console.error(error);
    }
  };
  handleClick = () => {
    console.log("this button was clicked");
    console.log(this.state.form);
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className=" BagdeNew__hero img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                name={this.state.form.FirstName || "Firts Name"}
                lastName={this.state.form.LastName || "Last Name"}
                email={this.state.form.email || "Email"}
                jobtittle={this.state.form.jobtittle || "Jobtittle"}
                twitter={this.state.form.twitter || "Twiter"}
              />
            </div>
            <div className="col-6">
              <h1> Edit attendent</h1>

              <Badgeform
                onChange={this.handleChange}
                valueform={this.state.form}
                onClick={this.handleClick}
                onSubmit={this.props.handleSubmit}
              />
            </div>
          </div>
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
