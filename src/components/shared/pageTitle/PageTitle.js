import React from 'react';
import { Helmet } from 'react-helmet';

//import'./PageTitle.css';

const PageTitle = (props)=>{
    return(
    <Helmet><title>{props.title}</title></Helmet>
);
};

export default PageTitle ;