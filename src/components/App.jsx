import { useEffect, useState } from "react";
import './App.css'
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import initContacts from "./Contact/contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contactValue");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initContacts;
    return parsedContacts;
  });

  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contactValue", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) => { 
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="phoneBook-container">
      <h1 className="phoneBook-title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchTerm} onAlter={setSearchTerm} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;