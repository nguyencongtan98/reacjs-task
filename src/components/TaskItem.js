import React from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function TaskItem(props) {
  const tan = Object.values(props.task);

  const showDetail = (task) => {
    console.log("Name: " + task.name);
  };

  var { task } = props;

  const deleteTask = (e) => {
    var check = window.confirm("ARE you delete");
    if (check) props.onDeleteTask(props.task.id);
  };

  return (
    <tbody key={task.id} onClick={() => showDetail(task)}>
      <tr>
        <td> {task.id} </td> <td> {task.name} </td>
        <td> {task.status ? "Ativate" : "Off"} </td>
        <td>
          <button onClick={deleteTask}>Xóa</button>
        </td>
      </tr>
    </tbody>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask: (id) => {
      dispatch(action.deleteTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
