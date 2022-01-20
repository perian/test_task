import React from 'react';
import './item-list.css';

const ItemList = ({data}) => {
  if (data == undefined ) {
    console.log('ndaaaa')
  }
  return (
    <ul className='user-list'>
      <li className='user-list__item'>
        <p>A</p>
        <div className="user-list__info">
          <p className='user-list__name'>
            {`${data[0].firstName} `} 
            {`${data[0].lastName}`}
            {`${data[1].firstName} `} 
            {`${data[1].lastName}`}
          </p>
          <label htmlFor="name1">
            <input id="name1" name="user-A" type="radio" value="not active"/>
            not active
          </label>
          <label htmlFor="name2">
            <input id="name2" name="user-A" type="radio" value="active"/>
            active
          </label>
        </div>
      </li>
    </ul>
  )
}

export default ItemList;
