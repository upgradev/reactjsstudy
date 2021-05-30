import React, { useState } from "react";


function AddContact({ history, addContactHandle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all the fields are mandatory");
      return;
    }
    addContactHandle({ name, email });
    setName("");
    setEmail("");
    history.push("/")
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form action="" className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
