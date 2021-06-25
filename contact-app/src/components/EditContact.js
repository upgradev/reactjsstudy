import React, { useState } from "react";

function EditContact(props,{ history, updateContactHandle}) {
  const [name, setName] = useState(props.location.state.contact.name);
  const [email, setEmail] = useState(props.location.state.contact.email);
  const [id, setId] = useState(props.location.state.contact.id);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all the fields are mandatory");
      return;
    }
    console.log(updateContactHandle({ id, name, email }));
    // updateContactHandle({ id, name, email });
    // setName("");
    // setEmail("");
    // history.push("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form action="" className="ui form" onSubmit={update}>
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
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditContact;
