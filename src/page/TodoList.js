import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { ReactSortable } from "react-sortablejs";
import AddNew from "../components/AddNew";
import "../assets/Style.css";

//FUNCTION LIST
const TodoList = () => {
  const [showNew, setShowNew] = useState(false);
  const handleShow = () => setShowNew(!showNew);
  const [id, setId] = useState(2);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //STATE AWAL LIST TASK
  const [list, setList] = useState([
    {
      id: 1,
      title: "Test Online Barito",
      desc: "",
      done: false,
    },
  ]);

  //HANDLE ADD NEW TASK
  const addNew = () => {
    if (title !== "") {
      setList([
        ...list,
        {
          id,
          title,
          desc,
          done: false,
        },
      ]);
      setId(id + 1);
      setTitle("");
      handleShow();
    } else {
      alert(`Name Task empty!`);
    }
  };

  //HANDLE DELETE TASK
  const deleteTask = (id) => {
    setList(list.filter((v, i) => v.id !== id));
  };

  //HANDLE COMPLETE TASK
  const complete = (data) => {
    const index = list.findIndex((item) => item.id == data.id);
    let current = [...list];
    current[index] = { ...current[index], done: !data.done };
    setList(current);
  };

  //HANDLE EDIT TASK
  const editTask = (data) => {
    const index = list.findIndex((item) => item.id == data.id);
    let current = [...list];
    current[index] = { ...current[index], title: data.title };
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
              handleTitle={(value) => setTitle(value)}
              handleDesc={(value) => setDesc(value)}
              handleShow={handleShow}
              addNew={addNew}
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

              <div style={{ marginTop: "1rem" }}>
                <input className="input-task" placeholder="Search task..." />
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
