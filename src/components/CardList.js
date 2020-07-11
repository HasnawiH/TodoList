import React, { useState, useEffect } from "react";

const CardList = ({ data, deleteTask, complete, index }) => {
  const [showInput, setShowInput] = useState(true);
  const [dataUpdate, setDataUpdate] = useState({
    id: null,
    title: "",
    desc: "",
    done: false,
  });

  useEffect(
    (v, i) => {
      setDataUpdate({
        id: data.id,
        title: data.title,
        desc: data.desc,
        done: data.done,
      });
    },
    [data]
  );

  return (
    <div className="card-list">
      <div style={{ display: "flex", alignItems: "center" }}>
        {data.done ? ( //IF TASK DONE
          <>
            <img
              onClick={() => complete(data)}
              style={{ width: "20px", height: "20px" }}
              src={require("../assets/img/done.svg")}
            />
            <div style={{ textDecoration: "line-through", marginLeft: "1rem" }}>
              {data.title}
            </div>
          </>
        ) : (
          // IF NOt DONE
          <>
            <img
              onClick={() => complete(data)}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              src={require("../assets/img/checklist.svg")}
            />

            <div style={{ marginLeft: "1rem" }}>
              {showInput ? (
                <div onClick={() => setShowInput(false)}>{data.title}</div>
              ) : (
                <div style={{display: "flex"}}>
                  <input
                    value={data.title}
                    onChange={(e) =>
                      setDataUpdate({ ...dataUpdate, title: e.target.value })
                    }
                    className="input-task"
                  />
                  <div className="update-task">Cancel</div>
                  <div className="update-task">Save</div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div onClick={() => deleteTask(data.id)} style={{ cursor: "pointer" }}>
        &times;
      </div>
    </div>
  );
};

export default CardList;
