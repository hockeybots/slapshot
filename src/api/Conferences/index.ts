import idx from 'idx';

import { CONFERENCES_ENDPOINT } from '../../endpoints';
import { Conference } from '../types';

import Endpoint from '../Endpoint';

/**
 * Conferences endpoint wrapper
 * @extends Endpoint
 * @description An abstraction of the {CONFERENCE_ENDPOINT} with a fluent API
 */
class Conferences extends Endpoint {
  /**
   * This method will transform API data in to a Conference object.
   * @param apiData {object} - The conference object of the response from the NHL API
   * @returns {Conference}
   */
  public static async toConference(apiData: any): Promise<Conference> {
    const conference: Conference = {
      abbreviation: apiData.abbreviation,
      active: apiData.active,
      id: apiData.id,
      name: apiData.name,
      shortName: apiData.shortName,
    };
    return conference;
  }

  private conferenceIds: Array<number>;
  constructor(...ids: Array<number>) {
    super();
    this.conferenceIds = ids;
    this.initUri();
  }
  public clear() {
    this.initUri();
  }
  public initUri() {
    this.uri = `${CONFERENCES_ENDPOINT}?conferenceId=${this.conferenceIds.join(',')}`;
  }
  /**
   * @description This method is used after building of the URI is complete. It will fetch and parse the NHL API data.
   * @returns {Array<Conference>}
   */
  public async data(): Promise<Array<Conference>> {
    try {
      const apiData = await this.load();
      return this.parseData(apiData);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  /**
   * @description This method will parse the raw NHL API data in to an array of Conference objects.
   * @param {object} apiData The raw NHL API data
   * @returns {Array<Conference>}
   */
  public async parseData(apiData: any): Promise<Array<Conference>> {
    const conferences = idx(apiData, (_) => _.conferences);
    if (!conferences || !Array.isArray(conferences)) {
      return Promise.reject('Unable to parse, missing data');
    }
    return Promise.all<Conference>(conferences.map((conference: any) => Conferences.toConference(conference)));
  }
}

export default Conferences;
