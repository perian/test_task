import React from 'react';
import './bd-list.css';
import BdItem from './bd-item';

const Bdlist = ({data}) => {
  const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getMonth = (data) => {
    let monthIndex = data.slice(5, 7);

    if (monthIndex.slice(0, 1) == 0) {
      monthIndex = monthIndex.slice(1, 2);
      return Months[monthIndex - 1];
    }

    return Months[monthIndex - 1];
  }
  
  const item = (month) => {
    const filter = data
      .filter(person => getMonth(person.dob) === month)
      .sort((a, b) => a.lastName > b.lastName ? 1 : -1)
      .map(person => <BdItem person={person}
                             key={person.id + '1'}
                             getMonth={getMonth} />);

    return (
      <div className='month' key={month}>
        <h3>{month}</h3>
          {filter.length > 0 ? filter : <p>No Employees</p>}
      </div>
    )
  }
  const content = Months.map(months => item(months));

  return (
    <div className='bd-list'>
      {content}
    </div>
  )
}

export default Bdlist;