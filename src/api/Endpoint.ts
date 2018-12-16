import axios from 'axios';
import { get } from 'lodash';
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
  /**
   * @description This method will parse the raw NHL API data in to an array of T objects.
   * @param {object} apiData The raw NHL API data
   * @returns {T[]}
   */
  public async parseData<T>(apiData: any, path: string, transformer: (data: any) => Promise<T>): Promise<Array<T>> {
    const desiredData = get(apiData, path);
    if (!desiredData || !Array.isArray(desiredData)) {
      return Promise.reject('Unable to parse, missing data');
    }
    return Promise.all<T>(desiredData.map((data: any) => transformer(data)));
  }
  /**
   *
   * @abstract
   */
  public abstract clear(): void;
  public abstract initUri(): void;
}

export default Endpoint;
