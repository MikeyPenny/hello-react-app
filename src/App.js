import React from 'react';
import './App.css';

import NavComponent from './components/NavComponent';
import ContentComp from './components/ContentComp';
import Card from './components/Card'; 
import BottomContainer from './layouts/BottomContainer';
import FlexContainer from './layouts/FlexContainer';

function App() {
  return (
    <div className="App">
      <FlexContainer>
        <NavComponent></NavComponent>
      </FlexContainer>
      <ContentComp/>
      <BottomContainer>
        <Card path="../assets/icon1.png" title="Decalarative" text="React makes it painless to create interactive  UIs." ></Card>
        <Card path="../assets/icon2.png" title="Components" text="Build encapsulated components that manage their state." ></Card>
        <Card path="../assets/icon3.png" title="Single-Way" text="A set of inmutablevalues are passed to the component." ></Card>
        <Card path="../assets/icon4.png" title="Decalarative" text="Statically-typed, designed to run on modern browsers." ></Card>
      </BottomContainer>
    </div>
  );
}

export default App;
