import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Dispesh",
  //     email: "malvia@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Nikesh",
  //     email: "niks@gmail.com",
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //retrievecontacts

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandle = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
    // setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const updateContactHandle = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log(response.data);
  };

  const removeContactHandle = async (id) => {
    await api.delete(`/contacts/${id}`);

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandle}
              />
            )}
            // component={() => (
            //   <ContactList
            //     contacts={contacts}
            //     getContactId={removeContactHandle}
            //   />
            // )}
            exact
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandle={addContactHandle} />
            )}
            // component={() => <AddContact addContactHandle={addContactHandle} />}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandle={e => this.updateContactHandle(e)}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>

        {/* <AddContact addContactHandle={addContactHandle} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandle} /> */}
      </Router>
    </div>
  );
}

export default App;
