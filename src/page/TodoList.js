import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { ReactSortable } from "react-sortablejs";
import "../assets/Style.css";

//FUNCTION ADD TASK
const AddNew = ({ list, handleShow }) => {
  const [id, setId] = useState(2);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addNew = () => {
    if (title !== "") {
      list({
        id,
        title,
        desc,
        done: false,
      });
      setId(id + 1);
      setTitle("");
      handleShow();
    } else {
      alert(`Name Task empty!`);
    }
  };

  return (
    <>
      <div className="nav">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            onClick={handleShow}
            style={{
              width: "10px",
              height: "20px",
              cursor: "pointer",
              marginTop: "6px",
            }}
            src={require("../assets/img/back.svg")}
          />

          <div style={{ marginLeft: "15px" }} className="task">
            Add New Task
          </div>
        </div>

        <div onClick={addNew} className="add-task">
          Done
        </div>
      </div>

      <div style={{ width: "100%", marginTop: "1rem" }}>
        <div>
          <div style={{ marginBottom: "1rem" }}>Name</div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="input-task"
            placeholder="Input name task"
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "0.50rem" }}>Description</div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className="input-task"
            style={{ minHeight: "3rem" }}
          />
        </div>
      </div>
    </>
  );
};

//FUNCTION LIST
const TodoList = () => {
  const [showNew, setShowNew] = useState(false);
  const handleShow = () => setShowNew(!showNew);
  const [list, setList] = useState([
    {
      id: 1,
      title: "Test Online Barito",
      desc: "",
      done: false,
    },
  ]);

  const deleteTask = (id) => {
    setList(list.filter((v, i) => v.id !== id));
  };

  const complete = (data) => {
    const index = list.findIndex((item) => item.id == data.id);
    let current = [...list];
    current[index] = { ...current[index], done: !data.done };
    setList(current);
  };

  const editTask = (data) => {
    const index = list.findIndex((item) => item.id == data.id);
    let current = [...list];
    current[index] = { ...current[index], title: !data.done };
    setList(current);
  };

  console.log(`ini list`, list);
  return (
    <div>
      <div className="header">Todo List</div>
      <div className="container">
        <div className="container-todo">
          {showNew ? (
            <AddNew
              list={(value) => setList([...list, value])}
              handleShow={handleShow}
            />
          ) : (
            <>
              <div className="nav">
                <div className="task" style={{ marginLeft: "1rem" }}>
                  Task List
                </div>
                <div onClick={handleShow} className="add-task">
                  Add Task
                </div>
              </div>
              <div style={{ width: "100%", marginTop: "1rem" }}>
                <ReactSortable
                  list={list}
                  setList={(newState) => {
                    setList(newState);
                    console.log(`ini new state`, newState);
                  }}
                >
                  {list &&
                    list.length > 0 &&
                    list.map((v, i) => (
                      <CardList
                        data={v}
                        deleteTask={(value) => deleteTask(value)}
                        complete={(val) => complete(val)}
                        editTask={(val) => editTask(val)}
                      />
                    ))}
                </ReactSortable>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
