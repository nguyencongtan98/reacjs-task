import React, { useEffect, useState } from "react";
import Controll from "./components/Controll";
import Detail from "./components/Detail";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isClose, setIsClose] = useState(true);

  const onGenerateData = () => {
    var tasks = [
      {
        id: 1,
        name: "Hoc lap trinh",
        status: true,
      },
      {
        id: 2,
        name: "Da banh",
        status: true,
      },
      {
        id: 3,
        name: "Choi game",
        status: false,
      },
    ];

    console.log(tasks + typeof tasks);

    // localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  /*  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks({
        tasks: tasks,
      });
    }
  }); */

  const oncloseform = () => {
    setIsClose(!isClose);
  };
  const onsubmit = (data) => {
    console.log(data);
    // setTasks({
    //   tasks: data,
    // });

    // console.log(tasks);
    /*  setTasks({
          tasks: data
        }); */

    // localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const elementForm = isClose ? (
    <TaskForm onClose={oncloseform} onSubmit={onsubmit} />
  ) : (
    ""
  );

  const setDisplayForm = () => {
    setIsClose(!isClose);
  };

  return (
    <div className="container">
      <h1> Quản lý công việc </h1>{" "}
      <div className="row">
        <div className={isClose ? "col-4" : ""}> {elementForm} </div>{" "}
        <div className={isClose ? "col-8" : "col-12"}>
          <a
            name=""
            id=""
            onClick={setDisplayForm}
            className="btn btn-danger"
            role="button"
          >
            Thêm Công việc{" "}
          </a>{" "}
          <a
            name=""
            id=""
            onClick={onGenerateData}
            className="btn btn-primary ml-3"
            role="button"
          >
            AUto{" "}
          </a>{" "}
          <Controll />
          <TaskList />
          <Detail />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
