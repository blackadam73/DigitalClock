import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date()
  const hours = date.getHours()
  const rightNow = date.toLocaleTimeString()
  let timeOfDay
  const h1Style = {
    fontSize: '40px',
  }
  
  if (hours < 12) {
    timeOfDay = "Morning"
  } else if (hours >= 12 && hours < 17) {
     timeOfDay = "afternoon"
  } else {
     timeOfDay = "night"
  } 
  return (
    <div>
      <h1 style={h1Style}>Good {timeOfDay.split(' ')
                       .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(" ")} </h1>
      <h2>{rightNow}</h2>
      <h3>Written by Franz Rodgers</h3>
    </div>
    )
}


function tick () {
    ReactDOM.render(<App />, document.getElementById('root'))
}

setInterval(tick, 1000);




export default App


