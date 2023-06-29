import React, { useState, useEffect } from "react";

const TodoData = () => {
  const [inputDatas, setInputDatas] = useState("");
  const [arrayInputDatas, setArrayInputDatas] = useState([]);

  const changeValue = (event) => {
    setInputDatas(event.target.value);
  };

  //  Add Data Into DataBase.........
  const addItemsInArray = async (e) => {
    const result = await fetch("http://localhost:8000/insert-data", {
      method: "Post",
      body: JSON.stringify({ toData: inputDatas }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    location.reload();
    setInputDatas("");
  };

  //  Read Data From DataBase.........
  const readDataIntoDataBase = async () => {
    let result = await fetch("http://localhost:8000/read-data");
    result = await result.json();
    setArrayInputDatas(result);
  };

  useEffect(() => {
    readDataIntoDataBase();
  }, []);

  // Delete Data Into Database........
  const deleteItems = async (ids) => {
    let result = await fetch(`http://localhost:8000/delete-data/${ids}`, {
      method: "delete",
    });
    if (result) {
      readDataIntoDataBase();
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figcaption>📑 Add Your List Here!! 📑</figcaption>
          <div className="add-item">
            <input
              type="text"
              placeholder="📝 Add Items"
              value={inputDatas}
              onChange={changeValue}
            />
            <i
              className="fa-solid fa-plus"
              title="Add Items"
              onClick={addItemsInArray}
            ></i>
          </div>
          <div className="show-items">
            {arrayInputDatas.map((value, id) => {
              return (
                <div className="each-items" key={id}>
                  <p>{`✍️ ${value.toData}`}</p>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Items"
                    // id jo pass kiya hai Oo map ki id hai..
                    onClick={() => deleteItems(value._id)}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoData;
