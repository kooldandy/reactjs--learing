import React from "react";
import "./Board.css";

const Board = () => {
  const stageList = ["Backlog", "Todo", "Progress", "Done"];
  const _taskList = [
    {
      id: (Math.random() * 1000000).toFixed(6),
      stage: stageList[0],
      name: "task 1",
    },
    {
      id: (Math.random() * 1000000).toFixed(6),
      stage: stageList[0],
      name: "task 2",
    },
    {
      id: (Math.random() * 1000000).toFixed(6),
      stage: stageList[1],
      name: "task 3",
    },
  ];

  const [taskList, setTaskList] = React.useState<Array<any>>([..._taskList]);
  const [taskName, setTaskName] = React.useState<string>("");
  const [enableEdit, setEnableEdit] = React.useState<boolean>(false);

  const drag = (ev: any) => {
    ev.dataTransfer.setData("task-id", ev.target.getAttribute("data-task-id"));
  };

  const drop = (ev: Event | any) => {
    ev.preventDefault();
    var taskId = ev.dataTransfer.getData("task-id");
    // ev.target.appendChild(document.querySelector(data));
    const stage = ev.currentTarget.getAttribute("data-stage");
    console.log(taskId, stage);

    const clonnedTaskList = [...taskList];
    const index = clonnedTaskList.findIndex((t) => t.id === taskId);
    const newTask = clonnedTaskList[index];
    newTask.stage = stage;
    clonnedTaskList.splice(index, 1);
    clonnedTaskList.push(newTask);
    setTaskList(clonnedTaskList);
  };

  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  const addTask = () => {
    if (!taskName) {
      alert("Write task name!");
      return;
    }
    const task = {
      id: (Math.random() * 1000000).toFixed(6),
      stage: stageList[0],
      name: taskName,
    };

    taskList.push(task);
    setTaskList(taskList);
    setTaskName("");
  };

  const makeEditable = () => {};

  return (
    <>
      <h1 className="h1">Kanban Board</h1>
      <div className="form">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Task
          </span>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
            placeholder="Add task"
          />
          <input
            type="button"
            value="Add"
            className="btn btn-primary"
            onClick={addTask}
          />
        </div>
      </div>
      <div className="d-md-inline-flex">
        {stageList.map((stage) => {
          return (
            <div
              className="p-2"
              onDrop={(ev) => drop(ev)}
              onDragOver={(ev) => allowDrop(ev)}
              key={stage}
              data-stage={stage}
            >
              <div
                className="card mh-100 border"
                style={{ width: "18rem", height: "25rem" }}
              >
                <div className="card-body text-dark border" data-card={stage}>
                  <h5 className="card-title text-muted">{stage}</h5>
                  {taskList.map((task) => {
                    if (stage === task.stage) {
                      return (
                        <div
                          className="border mb-2 bg-success bg-opacity-25 p-2 text-white"
                          draggable="true"
                          key={task.name}
                          onDragStart={(ev) => drag(ev)}
                          data-task-id={task.id}
                        >
                          {enableEdit && (
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                value={task.name}
                                onChange={() => {}}
                              />
                            </div>
                          )}
                          {!enableEdit && task.name}

                          {!enableEdit && (
                            <>
                              <span
                                className="edit-pencil"
                                onClick={() => setEnableEdit(true)}
                              ></span>
                              <span className="delete-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                              </span>
                            </>
                          )}
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
