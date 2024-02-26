import React from "react";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

const ContactList = (props) => {  
  const navigate = useNavigate();
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div 
      className="ui celled list">{renderContactList}
      <button onClick={() => navigate('/add')} className="ui button blue">Add Contact</button>

    </div>
    );
};

export default ContactList;
