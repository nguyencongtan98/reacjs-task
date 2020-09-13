import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

function TaskList(props) {
  console.log(props.tasks);
  const tan = Object.values(props.tasks);
  console.log(tan);
  const tasks2 = tan.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  //   console.log(props);
  return (
    <table className="table mt-3 table-bordered border-green">
      <thead>
        <tr>
          <th>STT</th>
          <th>TÊN</th>
          <th>TRẠNG THÁI</th>
          <th>HÀNH ĐỘNG</th>
        </tr>
      </thead>
      {tasks2}
    </table>
  );
}

const mapStatetoProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStatetoProps, null)(TaskList);
