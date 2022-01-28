import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './component/user-list';
import BdList from './component/bd-list';
import DataService from './component/data-service';
import { useFetching } from './component/hooks/useFetching';

const App = () => {
  const [data, setData] = useState([]);
  const [birthdayList, setBirthdayList] = useState([]);

  const [fetchPosts, isPostsLoading, dataError] = useFetching(async () => {
    const data = await DataService.getData();
    setData(data);
  })
  
  useEffect(() => {
    fetchPosts();
  }, [])

  const addPerson = (person) => {
    setBirthdayList([...birthdayList, person]);
  }

  const removePerson = (person) => {
    setBirthdayList(birthdayList.filter(p => p.id !== person.id));
  }

  return (
    <div className='container'>
      <main>
        <form>
          <h2 className='title'>Employees</h2>
          {dataError &&
            <p>Error happened: ${dataError}</p>
          }
          {isPostsLoading
            ?
            <p style={{textAlign: 'center'}}>Loading...</p>
            :
            <UserList data={data}
                      addPerson={addPerson}
                      removePerson={removePerson}
            />
          }
        </form>
      </main>
      <aside>
        <h2 className='title'>Employees birthday</h2>
        {birthdayList.length > 0
          ?
          <BdList data={birthdayList}/>
          :
          <p style={{textAlign: 'center'}}>Employees List is empty</p>
          }
      </aside>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
