import React, { Component } from "react";
import { Howl, Howler } from "howler";
import QuestionCard from "../shared/questionCard/QuestionCard";
import questionImage from "../../assets/questionImage.jpg";
import PageTitle from "../shared/pageTitle/PageTitle";
import questions from "../../assets/questions.js";
import isEmpty from "../../utils/is-empty";
import yesImport from "../../assets/sound/yes.mp3";
import "./MainGame.css";
import { Redirect } from "react-router";
import ScoreCard from "../shared/scoreCard/ScoreCard";
import Albanian from "../../assets/sound/Albanian.mp3";
import Chinease from "../../assets/sound/Chinease.mp3";
import French from "../../assets/sound/French.mp3";
import German from "../../assets/sound/German.mp3";
import Hindi from "../../assets/sound/Hindi.mp3";
import Italian from "../../assets/sound/Italian.mp3";
import Japanese from "../../assets/sound/Japanese.mp3";
import Polish from "../../assets/sound/Polish.mp3";
import Russian from "../../assets/sound/Russian.mp3";
import Spanish from "../../assets/sound/Spanish.mp3";


class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: 0,
      questionNumber: 1,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      correctBox: null,
      wrongAnswers: 0,
      wrongBox: null,
      disableOptions: null,
      usedFiftyFifty: false,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      redirect: false,
      showScore: false,
      gameEnded: false,
    };
  }

  componentDidMount() {
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        numberOfQuestions: questions.length,
        answer,
        previousRandomNumbers: [],
      });
    }
  };
  //-------------when Option is clicked
  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };
  correctAnswer = () => {
    const yesPlay = new Howl({
      src: [yesImport],
    });
    yesPlay.play();
    this.setState({ correctBox: true, disableOptions: true });
    this.setState((prevState) => ({
      score: prevState.score + 1,
      correctAnswers: prevState.correctAnswers + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
    }));
  };

  wrongAnswer = () => {
    navigator.vibrate(1000);
    this.setState({ wrongBox: true, disableOptions: true });
    this.setState((prevState) => ({
      wrongAnswers: prevState.wrongAnswers + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
    }));
  };

  nextQuestion = () => {
    if (this.state.nextQuestion === undefined) {
      this.endGame();
    } else {
      this.displayQuestions(
        this.state.questions,
        this.state.currentQuestion,
        this.state.nextQuestion,
        this.state.previousQuestion
      );
    }
    this.setState((prev) => ({
      questionNumber: prev.questionNumber + 1,
      correctBox: null,
      wrongBox: null,
      disableOptions: null,
    }));
  };

  endGame = () => {
    alert("Game has ended!");
    this.setState({ gameEnded:true});
  };

  quitGameHandler = () => {
    alert("Game has ended!");
    this.setState({ redirect: true });
  };
  soundHandler=()=>{
    const sound = [Hindi,German,Polish,Spanish,Italian,Russian,French,Japanese,Chinease]

    const soundOn = new Howl({
      src: [sound[this.state.numberOfAnsweredQuestions]],
    });
    soundOn.play();
  }

  render() {
    const { currentQuestion } = this.state;
    return (
      <React.Fragment>
        {this.state.redirect && <Redirect to="/" />}
        <PageTitle title="Main Game" />
        {!this.state.gameEnded && (
          <QuestionCard
            imageExist={true}
            url={questionImage}
            noOfAnsweredQuestions={this.state.questionNumber}
            score={this.state.score}
            title={currentQuestion.question}
            ques1={currentQuestion.optionA}
            ques2={currentQuestion.optionB}
            ques3={currentQuestion.optionC}
            ques4={currentQuestion.optionD}
            disabled={this.state.disableOptions}
            clicked={this.handleOptionClick}
            correctBox={this.state.correctBox}
            wrongBox={this.state.wrongBox}
            rightBtnText="Next"
            nextClick={this.nextQuestion}
            quit={this.quitGameHandler}
            soundOn={this.soundHandler}
          />
        )}
        {this.state.gameEnded && (
          <ScoreCard
            title="Your Score"
            score={this.state.score}
            rightAns={this.state.correctAnswers}
            wrongAns={this.state.wrongAnswers}
          />
        )}
      </React.Fragment>
    );
  }
}

export default MainGame;
