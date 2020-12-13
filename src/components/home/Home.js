import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.jpg";
import PageTitle from "../shared/pageTitle/PageTitle";
import "./Home.css"

const Home = (props) => {
  return (
    <React.Fragment>
      <PageTitle title="Who done it, Sherlock?" />
      <header
        className="masthead"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>"Who done it, Sherlock?"</h1>
                <span className="subheading">A Fun Language Guessing Game</span>
                <Link className="btn  w-50 btn-outline-light mt-5" to="/game" >Go To Game</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Home;
