import {useState, useEffect} from 'react';
import axios from 'axios'

const Backend = () => {
  
  const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        `https://yalantis-react-school-api.yalantis.com/api/task0/users`
      );
      setData(result.data);
    }

    fetchData()
  }, [])

  const newArray = Object.assign({}, data)
  return newArray;
};

export default Backend
