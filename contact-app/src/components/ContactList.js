import React from "react";
import ContactCard from "./ContactCard";

import { Link } from "react-router-dom";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandle = (id) => {
    getContactId(id);
  };

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Dispesh",
  //     email: "malvia@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Dispesh",
  //     email: "malvia@gmail.com",
  //   },
  // ];

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandle={deleteContactHandle}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
