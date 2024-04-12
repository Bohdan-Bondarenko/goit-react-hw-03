import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({contacts, onDelete}) {
    return (
        <ul className={css.contactList}>
            {contacts.map((contact) => (
                <li className={css.contactItem} key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
            </li>
        ))}
        </ul>       
    );
}

export default ContactList;