import React from 'react';
import './user-list.css';
import UserItem from './user-item';

const UserList = ({data, addPerson, removePerson}) => {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const user = (letter) => {
    const filteredPersons = data
      .filter(person => person.firstName[0] === letter)
      .sort((a, b) => a.firstName > b.firstName ? 1 : -1)
      .map(person => <UserItem person={person}
                           key={person.id}
                           addPerson={addPerson}
                           removePerson={removePerson} />);

    return (
      <li className='user-list__item' key={letter}>
        <h3>{letter}</h3>
        {filteredPersons.length > 0 ? filteredPersons : <p>No Employees</p>}
      </li>
    );
  }

  const content = alphabet.map(letter => user(letter));

  return (
    <ul className='user-list'>
      {content}
    </ul>
  )
}

export default UserList;
