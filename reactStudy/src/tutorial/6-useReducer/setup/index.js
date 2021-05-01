import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  console.log(state, action);
  const newPeople = [...state.people, action.payload]
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item add",
    };
  }
  if (action.type === "NO_VALUE") {
    return {...state, isModalOpen: true, modalContent: "please enter value"}
  }

  if(action.type === "CLOSE_MODAL"){
    return {...state, isModalOpen: false}
  }

  return state;

  throw new Error("no matching action type");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

const Index = () => {
  const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("")
      // setShowModal(true);
      // setPeople([
      //   ...people,
      //   { id: new Date().getTime().toString(), name: name },
      // ]);
      // setName("");
    } else {
      // setShowModal(true);
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"})
  }

  return (
    <>
      <h2>useReducer</h2>

      {/* {showModal && <Modal />} */}
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
