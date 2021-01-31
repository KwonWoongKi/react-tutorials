import React from 'react';
import SecondComp from './SecondComp';
import './Test.css';

const FirstComp = () => {

    const value = 7;

    return  (   
               <SecondComp value = {value} value2 = "isRequired Test">리액트 도서관</SecondComp>
            );
};

export default FirstComp;