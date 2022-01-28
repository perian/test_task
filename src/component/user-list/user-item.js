import React, {useState} from 'react';

const UserItem = ({person, addPerson, removePerson}) => {
  const [active, setActive] = useState(false);

  const onActiveChange = (evt) => {
    if (evt.target.value === 'false') {
      setActive('false');
      removePerson(person);
    } else {
      setActive('true');
      addPerson(person);
    }
  }

  return (
    <div className={`user-list__info`}>
      <p className={active === 'true' ? 'user-list__name active' : 'user-list__name'}>
        {`${person.firstName} ${person.lastName}`}
      </p>
      <label htmlFor={`not-active-${person.id}`}>
        <input
          id={`not-active-${person.id}`}
          name={`${person.firstName} ${person.lastName}`}
          type='radio'
          value='false'
          onChange={(evt) => onActiveChange(evt)}/>
        not active
      </label>
      <label
        htmlFor={`active-${person.id}`}>
        <input 
          id={`active-${person.id}`}
          name={`${person.firstName} ${person.lastName}`}
          type='radio'
          value='true'
          onChange={(evt) => onActiveChange(evt)}/>
        active
      </label>
    </div>
  )
}

export default UserItem;