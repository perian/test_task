import React, {useState, useCallback, useEffect, useMemo} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import ItemList from './component/item-list';
import Backend from './component/backend';
import axios from 'axios'

const App = () => {
  const data = Backend();
    
  return (
    <div className="container">
      <main>
        <form>
          <ItemList data={data}/>
        </form>
      </main>
      <aside>
        <p>Employees birthday</p>
      </aside>
    </div>
  )
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
