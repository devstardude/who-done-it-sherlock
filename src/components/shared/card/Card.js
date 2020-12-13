import React from "react";
import { Link } from "react-router-dom";

//import'./Card.css';

const Card = (props) => {
  return (
    <div class="card HomeCard  text-center ">
      {props.imageExist && (
        <img src={props.url} class="card-img-top" alt="Sherlock.jpg" />
      )}
      <div class="card-body ">
        <h5 class="card-title">{props.title} </h5>
        <p class="card-text">{props.description} </p>
        <Link
          to={props.leftBtnLink}
          class="btn btn-outline-light mr-2 mr-md-4  mr-sm-1"
        >
          {props.leftBtnText}
        </Link>
        <Link
          to={props.rightBtnLink}
          class="btn btn-outline-light ml-2 mt-sm-0 ml-md-4 ml-sm-1 "
        >
          {props.rightBtnText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
