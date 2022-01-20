import {useState, useEffect} from 'react';
import axios from 'axios'

const Backend = () => {
  
  const [data, setData] = useState({id: 1, firstName: 'Johny', lastName: 'Peperoni', dob: ''});

    useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        `https://yalantis-react-school-api.yalantis.com/api/task0/users`
      );
      if (result == undefined ) {
        
      }
      setData(result.data);
    }

    fetchData();
  }, []);

  let clonedData = [];
  for (let item of Object.keys(data)) {
    clonedData.push(data[item]);
  }
  
  return clonedData;
};

export default Backend;
