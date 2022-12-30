import Header from "./components/Header";
import UserLayout from "./components/UserLayout";
import FormInsert from "./components/FormInsert";
import { useState, useEffect } from "react";
// import fetch from "node-fetch";

function App() {
  const [showAddObjective, setShowAddObjective] = useState(false);

  const [tasks, setTasks] = useState(null);

  const [objectives, setObjectives] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const dataObj = await fetchData("/objetivos");
      setObjectives(dataObj);

      const dataTasks = await fetchData("/tarefas/usr/14");
      setTasks(dataTasks);
    };
    loadData();
  }, []);


  const fetchData = async (url) => {
    let res = await fetch(url).then((res) => res.json());
    return res;
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.taskid === id ? { ...task, reminde: !task.reminde } : task
      )
    );
  };

  // add Objectives
  const addObjectives = (objective) => {
    let objid = Math.floor(Math.random() * 100);

    const newObjective = { objid, ...objective };

    setObjectives([...objectives, newObjective]);
  };

  //add tasks
  const addTasks = (task) => {
    let taskid = Math.floor(Math.random() * 100);

    const newTask = { taskid, ...task };

    setTasks([...tasks, newTask]);
  };

  //show form

  const showFormObj = () => {
    setShowAddObjective(!showAddObjective);
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        {showAddObjective === true ? (
          <FormInsert addObjectives={addObjectives} showFormObj={showFormObj} />
        ) : (
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={showFormObj}>
              Novo Objetivo
            </button>
          </>
        )}
      </div>
      <div>
        {objectives && tasks != null ? (
          <UserLayout
            tasks={tasks}
            objectives={objectives}
            reminder={toggleReminder}
            addTasks={addTasks}
          />
        ) : (
          <p>Loading Objetivos...</p>
        )}
      </div>
    </div>
  );
}

export default App;
