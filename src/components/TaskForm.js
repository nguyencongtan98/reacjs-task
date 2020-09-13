import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function TaskForm(props) {
  const [tasks, setTasks] = useState({
    id:"",
    name: "",
    status: false,
  });

  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });

    console.log(tasks);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(tasks.name, tasks.status);
    props.onAddTask(tasks);
  };

  const oncloseform = () => {
    props.onClose();
  };

  /*   const handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    setTasks([,
      {
        [name]: value,
      },
    ]);
    console.log(tasks);
  }; */

  /*   const onSubmit = () => {
    
  }; */

  return (
    <div className="card">
      <div className="card-header">
        Thêm Công Việc<span onClick={oncloseform}>X</span>
      </div>
      <div className="card-body">
        <div className="form-group">
          <div className="form-group">
            <input name="id" type="number" value={tasks.id}  onChange={handleChange} />
            <label>Công việc</label>
            <input
              type="text"
              className="form-control"
              value={tasks.name}
              name="name"
              onChange={handleChange}
              aria-describedby="helpId"
              placeholder=""
            />
          </div>

          <label>Trạng thái</label>
          <select
            id="my-select"
            className="custom-select"
            onChange={handleChange}
            value={tasks.status}
            name="status"
          >
            <option value={true}>Active</option>
            <option value={false}>Disabal</option>
          </select>

          <button onClick={onSubmit} className="form-control bg-blue">
            Them
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks

  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
