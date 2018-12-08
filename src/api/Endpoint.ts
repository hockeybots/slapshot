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
      const apiResponse = await axios.get(this.uri);
      return apiResponse.data;
    }
    return Promise.reject(`Cannot load data from an invalid endpoint ${this.uri}`);
  }
  public appendToUri = (path: string) => `${this.uri}/${path}`;
  /**
   *
   * @abstract
   */
  public abstract clear(): void;
  public abstract initUri(): void;
}

export default Endpoint;
