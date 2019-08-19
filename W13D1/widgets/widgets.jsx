import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/Clock'
import Tab from './frontend/tab'

const arr = [
  {name: "Uno", body: "Me be the First"},
  {name: "Dos", body: "Dos Ekkit"},
  {name: "Tree", body: "Im running out of..."}
]

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<div>
  <Clock /> 
  <Tab props={ arr }/> 
  </div>, root);

});

