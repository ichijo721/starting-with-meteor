import React from 'react';
import { ContactList } from './ConctactList';
import { ContactosForm } from './ContactosForm';

export const App = () => (
  <div>
    <h1>Meteor  wallet!</h1>
    <ContactosForm />
    <ContactList />
  </div>
);
