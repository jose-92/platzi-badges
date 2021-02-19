import React from "react";

class Badgeform extends React.Component {
  handleClick = (e) => {
    console.log("this button was clicked");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Firts Name</label>
            <input
              required
              className="form-control"
              name="firstName"
              type="text"
              onChange={this.props.onChange}
              value={this.props.valueform.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              required
              className="form-control"
              name="lastName"
              type="text"
              onChange={this.props.onChange}
              value={this.props.valueform.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              required
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.valueform.email}
            />
          </div>
          <div className="form-group">
            <label>Job tittle</label>
            <input
              required
              className="form-control"
              name="jobTitle"
              type="text"
              onChange={this.props.onChange}
              value={this.props.valueform.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              required
              className="form-control"
              name="twitter"
              type="text"
              onChange={this.props.onChange}
              value={this.props.valueform.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Badgeform;
