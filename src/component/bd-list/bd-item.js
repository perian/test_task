import React from 'react';

const BdItem = ({person, getMonth}) => {
  const getFormatedDate = (date) => {
    const year = date.slice(0, 4);
    const month = getMonth(date);
    const day = date.slice(8, 10);

    return `${day} ${month}, ${year} year`;
  }

  const persons = <li key={person.id}>{person.lastName} {person.firstName} - {getFormatedDate(person.dob)}</li>
  
  return (
    <ul>
      {persons}
    </ul>
  )
}

export default BdItem;