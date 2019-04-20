import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import { Tabs } from './tabs'; //whenever we export comp. class right before we declare

//create function for Root - returns imported components (nest theminside div tags)
function Root () {
 
  return (
    <div> 
      <Clock />            
      <Tabs tabbos={tabData} stuff="cheese" />
    </div>
  );
}

const tabData = [
  {title: "one", content: "I'm tab one"},
  {title: "two", content: "I'm tab two"},
  {title: "three", content: "I'm tab three"}
];

document.addEventListener("DOMContentLoaded", () => {
  const domWidget = document.getElementById('entry'); //select id we want to replace with React
  ReactDOM.render(<Root />, domWidget); 
});

