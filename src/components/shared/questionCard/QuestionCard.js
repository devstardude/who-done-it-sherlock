import React from "react";
import { Link } from "react-router-dom";
import CenterLayout from "../CenterLayout/CenterLayout";
import "./QuestionCard.css";

const QuestionCard = (props) => {
  return (
    <CenterLayout>
      <div className="card HomeCard  ">
        {props.imageExist && (
          <img src={props.url} className="card-img-top" alt="Sherlock.jpg" />
        )}
        <div className="card-body ">
          <div className="row">
            <div className="col-6 ">
              <p className="ml-auto ">
                Ques. {String(props.noOfAnsweredQuestions)} /10
              </p>
            </div>
            <div className="col-6 ">
              <p className="mr-auto">Score {String(props.score)}/10</p>
            </div>
          </div>
          <h5 className="card-title justify-content-left">{props.title} </h5>
          <p onClick={props.soundOn} className="card-text btn btn-outline-light mt-2">
            🔊 Click to Play{" "}
          </p>
          <div className="mt-2 row">
            <div className="col-6">
              <button
                onClick={props.clicked}
                disabled={props.disabled}
                className="btn btn-block btn-outline-light mt-3 "
              >
                {props.ques1}
              </button>
              <button
                onClick={props.clicked}
                disabled={props.disabled}
                className="btn btn-block btn-outline-light mt-3"
              >
                {props.ques2}
              </button>
            </div>
            <div className="col-6">
              <button
                onClick={props.clicked}
                disabled={props.disabled}
                className="btn btn-block btn-outline-light mt-3"
              >
                {props.ques3}
              </button>
              <button
                onClick={props.clicked}
                disabled={props.disabled}
                className="btn btn-block btn-outline-light mt-3"
              >
                {props.ques4}
              </button>
            </div>
          </div>
          <hr className="mt-4 mb-3" />
          <div className="row text-center">
            <div className="col-12">
              {props.correctBox && <h1>Correct</h1>}
              {props.wrongBox && <h1>Wrong</h1>}
            </div>
          </div>
          <div>
            {(props.correctBox || props.wrongBox) && (
              <div className="row text-center">
                <div className="col-12">
                  <Link
                    onClick={props.nextClick}
                    className="btn btn-block btn-outline-light bg-info  mr-auto nextPrevButton"
                  >
                    {props.rightBtnText}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <hr className="mt-3 mb-3" />
          <div className="row">
            <div className="col-12 text-center  ">
              <Link
                onClick={props.quit}
                className="btn btn-block btn-outline-light bg-danger w-100 ml-auto mr-auto"
              >
                Quit Game
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CenterLayout>
  );
};

export default QuestionCard;
