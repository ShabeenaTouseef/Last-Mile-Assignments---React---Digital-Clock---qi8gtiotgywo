import React from 'react'
import '../styles/App.css';
class App extends React.Component {
  constructor(props){
  super(props);
    this.state={date:new Date()};
    }
  
  
    componentDidMount(){
    this.timerID=setInterval(()=>this.tick(),1000);
    }
  
  
  componentWillUnmount(){
  clearInterval(this.timerID);
  }
  
  
tick(){
this.setState({date:new Date()});

}
  
  
  
 render(){
   return (
    <div id="main">
      <div className="date-time">{this.state.date. toLocaleString()}</div>
    </div>
  )
}
}


export default App;
