import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes , useNavigate} from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ShoppingPage  from "./ShoppingPage";


function AddContactWrapper(props) {
  const navigate = useNavigate();
  return <AddContact {...props} navigate={navigate} />;
}
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

 
  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShoppingPage />} /> 
          <Route path="/add" element={<AddContactWrapper addContactHandler={addContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
