import React from 'react';
import { Link } from 'react-router-dom';
import CenterLayout from '../CenterLayout/CenterLayout';
import fun from "../../../assets/fun.png"
//import'./ScoreCard.css';

const ScoreCard = (props)=>{
    return (
      <CenterLayout>
        <div class="card HomeCard h-100  justify-content-center text-center ">
         
            <img src={fun} class="card-img-top" alt="Sherlock.jpg" />
          
          <div class="card-body ">
            <h5 class="card-title">{props.title} </h5>
            <p class="card-text">Your Score is {props.score}/10 </p>
            <hr />
            <p class="card-text">Correct Answers : {props.rightAns} </p>
            <p class="card-text">Wrong Answers : {props.wrongAns} </p>
            <Link
              to="/"
              className="btn btn-block btn-outline-light bg-danger w-100 ml-auto mr-auto"
            >
              Go to Main Screen
            </Link>
          </div>
        </div>
      </CenterLayout>
    );
};

export default ScoreCard ;