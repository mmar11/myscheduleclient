import Header from "./components/Header";
import UserLayout from "./components/UserLayout";
import { useState } from "react";



function App() {
const [state , setState1] = useState({tasks:[
  {taskid: 11 , nome: 'teste tesk' , data: 2022-10-22, obs: "obs2"},
  {taskid: 22 , nome: 'teste task' , data: 2022-10-22, obs: "obs2"},
  {taskid: 33 , nome: 'teste task' , data: 2022-10-22, obs: "obs3"}]
,
objectives:[
  {objid: 1 , nome: 'teste1' , data: '2022-10-21' , obs: "obs1"},
  {objid: 2 , nome: 'teste2' , data: 2022-10-22, obs: "obs1"},
  {objid: 3 , nome: 'teste3' , data: 2022-10-23, obs: "obs1"}]

})


const toggleReminder = (id)=> {
  console.log(id)

}



  return (

    <div className="App">
      <div><Header/></div>
      
      <div><UserLayout state={state} reminder={toggleReminder} /></div>
      

    
    </div>
  );
}

export default App;
