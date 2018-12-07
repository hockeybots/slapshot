import axios from 'axios';
import validator from 'validator';

/**
 * The Endpoint abstract class
 * All endpoints, for example {Team} extend Endpoint
 */
abstract class Endpoint {
  public uri: string = '';
  public async load(): Promise<any> {
    if (validator.isURL(this.uri)) {
      return axios.get(this.uri);
    }
    return Promise.reject('Cannot load data from an invalid endpoint');
  }
  /**
   *
   * @abstract
   */
  public abstract clear(): void;
  public abstract initUri(): void;
}

export default Endpoint;
