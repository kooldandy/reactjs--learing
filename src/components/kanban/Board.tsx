import React from "react";
import "./Board.css";

const Board = () => {
  const stageList = ["Backlog", "Todo", "Progress", "Done"];
  const _taskList = [
    {
      stage: stageList[0],
      name: "task 1",
    },
    {
      stage: stageList[0],
      name: "task 2",
    },
    {
      stage: stageList[1],
      name: "task 3",
    },
  ];

  const [taskList, setTaskList] = React.useState([..._taskList]);

  const dragDone = () => {
    console.log("drag");
  };

  const drag = (ev: any) => {
    ev.dataTransfer.setData(
      "task-name",
      ev.target.getAttribute("data-task-name")
    );
  };

  const drop = (ev: Event | any) => {
    ev.preventDefault();
    var taskName = ev.dataTransfer.getData("task-name");
    // ev.target.appendChild(document.querySelector(data));
    const stage = ev.currentTarget.getAttribute("data-stage");
    console.log(taskName, stage);
    
    const clonnedTaskList = [...taskList];
    const index = clonnedTaskList.findIndex(t => t.name === taskName);
    const newTask = clonnedTaskList[index];
    newTask.stage = stage;
    clonnedTaskList.splice(index, 1);
    clonnedTaskList.push(newTask);
    setTaskList(clonnedTaskList);
  };

  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  return (
    <>
      <h1 className="h1">Kanban Board</h1>
      <div className="d-md-inline-flex">
        {stageList.map((stage) => {
          return (
            <div
              className="p-2"
              onDragEnd={dragDone}
              onDrop={(ev) => drop(ev)}
              onDragOver={(ev) => allowDrop(ev)}
              key={stage}
              data-stage={stage}
            >
              <div
                className="card mh-100 border"
                style={{ width: "18rem", height: "25rem" }}
              >
                <div className="card-body text-dark border">
                  <h5 className="card-title text-muted">{stage}</h5>
                  {taskList.map((task) => {
                    if (stage === task.stage) {
                      return (
                        <div
                          className="bg-light border mb-2"
                          draggable="true"
                          key={task.name}
                          onDragStart={(ev) => drag(ev)}
                          data-task-name={task.name}
                        >
                          {task.name}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
