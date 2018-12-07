import axios from 'axios';
import validator from 'validator';

class Endpoint {
  public uri: string = '';
  public async load(): Promise<any> {
    if (validator.isURL(this.uri)) {
      return axios.get(this.uri);
    }
    return Promise.reject('Cannot load data from an invalid endpoint');
  }
}

export default Endpoint;
