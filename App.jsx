import React from "react";
import data from "./data";
import ListItem from "./listitem";
const App=()=>{
  // const clickHandle=(e)=>{
  //   console.log(e)
  // function clickHandle(e){
  //   console.log("Hello i am regular function", e);
  // }
  function clickHandle(e,firstName){
    console.log("Hello i am regular fun",e,firstName);
  }

  return(
    <main className="container">
      {/* <button className="button" onClick={clickHandle()}>click me</button> it wont work cz it is calling a function.so first time it works after it wont work. */}
      <button className="button" onClick={function(e){return clickHandle(e,"manjeera")}}>click me</button>
    </main>
  )
}


export default App;