import React from 'react'
import Taskitem from "./Taskitem";

function Tasklist({tasks, showIncomplete,setTaskStatus,removeTask,setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
      {tasks.filter(task => showIncomplete ? task.status !== 1 : true ).map((task) => (
        <Taskitem key={task.id} task={task} setTaskStatus={setTaskStatus} removeTask={removeTask}/>
      ))}
    </ul>
    <div className="filter-wrapper">
      <label htmlfor="filter" className="filter-label">
        Show incompleted tasks only
      </label>
      <input type="checkbox" id="filter" checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)}/>
    </div>
    </>
  );
}

export default Tasklist
