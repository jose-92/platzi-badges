import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../componentes/Badge";
import Badgeform from "../componentes/Badgeform";
import api from "../api";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: "",
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
                firstName={this.state.form.firstName || "Firts Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle || "Jobtittle"}
                twitter={this.state.form.twitter || "Twiter"}
                avatarUrl={this.props.email}
              />
            </div>
            <div className="col-6">
              <h1> New Attendent</h1>
              <Badgeform
                onChange={this.handleChange}
                valueform={this.state.form}
                onSubmit={this.handleSubmit}
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
