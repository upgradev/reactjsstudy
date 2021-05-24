import React from "react";

import user from "../images/user.png";

const ContactCard = ({ contact, clickHandle }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div> {email} </div>
      </div>
      <i className="trash alternate outline icon" style={{ color: "red" }}
        onClick={() => clickHandle(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
