import React, {useState} from 'react'

const AddNew = ({ handleTitle, handleDesc, handleShow, addNew }) => {
    
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
            <div style={{ marginBottom: "1rem", marginLeft: "0.50rem" }}>Name</div>
            <input
              onChange={(e) => handleTitle(e.target.value)}
              className="input-task"
              placeholder="Input name task"
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div style={{ marginBottom: "0.50rem", marginLeft: "0.50rem" }}>Description</div>
            <textarea
              onChange={(e) => handleDesc(e.target.value)}
              className="input-task"
              style={{ minHeight: "3rem" }}
            />
          </div>
        </div>
      </>
    );
  };

export default AddNew
