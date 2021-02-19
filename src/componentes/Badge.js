import React from "react";
import logo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} />;
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="foto de email"
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>{this.props.jobTitle}</p>
          <p>@{this.props.twitter} </p>
        </div>
        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
