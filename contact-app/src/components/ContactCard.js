import React from "react";
import { Link } from "react-router-dom";

import user from "../images/user.png";

const ContactCard = ({ contact, clickHandle }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { contact: contact } }}>
          <div className="header">{name}</div>
          <div> {email} </div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red" }}
        onClick={() => clickHandle(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px", marginLeft: "10px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
