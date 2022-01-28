import React, {Component} from 'react';
import axios from 'axios';

export default class DataService extends Component {
  static async getData() {
    try {
      const response = await axios.get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`);
      return response.data;

    } catch (e) {
      console.log(e)
    }
  }
};