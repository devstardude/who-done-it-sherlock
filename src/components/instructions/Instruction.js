import React from 'react';
import Card from '../shared/card/Card';
import CenterLayout from '../shared/CenterLayout/CenterLayout';
import PageTitle from '../shared/pageTitle/PageTitle';

//import'./Instructions.css';

const Instructions = (props)=>{
      const instructions = <div className="text-left">
      <hr/>
        <p>1) There will be 10 Questions</p>
        <p>1) Click on the Sound Icon to listen sound and then answer.</p>
        <p>1) At the end you'll see your score</p>
      </div>;

    return (
      <React.Fragment>
        <PageTitle title="Instructions" />
        <CenterLayout>
          <Card
            title="Instructions"
            description={instructions}
            leftBtnLink="/home"
            leftBtnText="Go Back"
            rightBtnLink="/maingame"
            rightBtnText="Play Game"
          />
        </CenterLayout>
      </React.Fragment>
    );
};

export default Instructions ;