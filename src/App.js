
import './App.css';
import React from "react";
import Toggle from './Toggle.js'
import Interval from './interval.js' //it shows the time interval since the last component was mounted.
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h3 style={{textAlign:"center"}}>Hey! click the boutton if you want to see my profile  </h3>
        <Toggle/>
         <Interval/>
      </div>
    )
  }
};
export default App;
