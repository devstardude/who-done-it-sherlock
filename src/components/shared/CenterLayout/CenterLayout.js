import React from "react";

//import'./CenterLayout.css';

const CenterLayout = (props) => {
  return (
    <div className="container-fluid ">
      <div className="row HomeContainer mt-2 ">
        <div className="col-12 col-sm-8 col-md-6 mx-auto mt-5">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CenterLayout;
