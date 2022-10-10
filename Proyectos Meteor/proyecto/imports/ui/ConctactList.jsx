import React from "react";
import { ConctacsCollection } from "../api/ContactsCollection";
import {useTracker} from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ConctacsCollection.find({}).fetch(); //Tracker
    }); 
    return (
        <>
        <h3>Contact List</h3>
        {contacts.map(contact => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>
        ))}
        </>
    )
}