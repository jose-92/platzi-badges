import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgeList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges was found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            create new badge
          </Link>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div>
          <ul>
            {this.props.badges.map((e) => {
              return (
                <div key={e.id}>
                  <p className="BadgesListItem">
                    <Gravatar
                      className="BadgesListItem__avatar"
                      email={e.email}
                    />
                    {e.firstName} {e.lastName}
                    <br />
                    {e.twitter}
                    <br />
                    {e.jobTitle}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeList;
