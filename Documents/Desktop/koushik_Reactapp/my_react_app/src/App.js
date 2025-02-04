// import React from "react";
// import './App.css';

// function App() {
//   // let x = React.createElement("div",{classNAme:"App"},
//   //   React.createElement("h1",null,"Welcome to React")
//   // )
//   let username="Koushik";
//     return (
//   //   <div className="App">
//   //     <h1>Welcome to React</h1>
//   //      <img/>
//   //   </div>
//     // x
//     <div> 
//       <h1>ExcleR</h1>
//       <p>Super</p>
//       {username}
//       {777}
//     </div>

//      );
// }

// export default App;
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//       </div>
//     )
//   }

// }
// export default App;


// function App(){
//   return(
//     <div>
//       <h1>Functional component</h1>
//     </div>
//   )
// }
// export default App;

// const App=( )=>{
//   return (
//     <div>
//       <h1>Functional component</h1>
//     </div>
//   )
// }
// export default App();
import React,{Component} from "react";
import CBCPropEx1 from "./components/propexample/CBCpropEx1";
export default class App extends Component{
    render(){
        return(
            <div>
               App
               <CBCPropEx1
               username="Uday"
               age={19}
               hobbies={["playing","Eating","Sleeping"]}
               address={{city : "Hyderabad",arae : "maisammaguda"}}
               sendFun={function(){alert("Hi koushik")}}/>
               </div>  
                     )
    }
}