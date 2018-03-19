import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmpData from './component/EmpDataComponent/EmpData'



class App extends Component {
  constructor(){
    super();
    this.state={
      title :"welcome title first",
      arrayList:[]
    }
  }
  // addItem(event)
  // {
    
  // if(event.charCode == 13){
  
  // let newArray = this.state.arrayList;
  //   newArray.push(event.target.value)
  //   this.setState({arrayList:newArray});
  
  //   console.log(this.state.arrayList,"in the addItem");
  // }
  // }
  render() {
    return (
      <div className="App">
        {/* <input placeholder="name ?"onKeyPress={this.addItem.bind(this)} /> */}
        <EmpData ></EmpData> 
      </div>
    );
  }
}

export default App;
