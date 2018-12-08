import axios from 'axios';
import validator from 'validator';

/**
 * @abstract
 * @class Endpoint
 * @description The Endpoint abstract class<br />
 * All endpoints, for example {Teams} extend Endpoint
 */
abstract class Endpoint {
  /**
   * @property {string} The URI of the endpoint
   */
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
