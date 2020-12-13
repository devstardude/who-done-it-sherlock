import React from "react";
import sherlockGameIsOn from "../../assets/sherlockGameIsOn.jpg"
import Card from "../shared/card/Card";
import CenterLayout from "../shared/CenterLayout/CenterLayout";
import PageTitle from "../shared/pageTitle/PageTitle";
import'./Game.css';

const Game = (props) => {
  return (
    <React.Fragment>
      <div class="d-grid gap-2">
      </div>
      <PageTitle title="Home" />
      <CenterLayout>
        <Card
          imageExist={true}
          url={sherlockGameIsOn}
          title="Who Done It "
          description="Click on Play Game Button to Start the game"
          leftBtnLink="/landing"
          leftBtnText="Go Back"
          rightBtnLink="/instructions"
          rightBtnText="Play Game"
        />
      </CenterLayout>
    </React.Fragment>
  );
};

export default Game;
