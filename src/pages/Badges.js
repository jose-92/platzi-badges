import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgeList from "../componentes/BadgeList";
import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: null, data: data });
    } catch (error) {
      this.setState({ loading: null, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <h1>Loading ...</h1>;
    }
    if (this.state.error) {
      return <h1>Lo sentimos algo nos salio mal intentelo nuevamente </h1>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div>
            <BadgeList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
