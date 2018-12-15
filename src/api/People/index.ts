import idx from 'idx';

import { PEOPLE_ENDPOINT } from '../../endpoints';
import { Player } from '../types';

import Endpoint from '../Endpoint';

/**
 * People endpoint wrapper
 * @extends Endpoint
 * @description An abstraction of the {PEOPLE_ENDPOINT} with a fluent API
 */
class People extends Endpoint {
  /**
   * This method will transform API data in to a Player object.
   * @param apiData {object} - The conference object of the response from the NHL API
   * @returns {Player}
   */
  public static async toPlayer(apiData: any): Promise<Player> {
    const player: Player = {
      age: apiData.currentAge,
      birthDate: new Date(apiData.birthDate),
      birthplace: `${apiData.birthCity}, ${apiData.birthStateProvince || ''} ${apiData.birthCountry}`,
      dominantSide: apiData.shootsCatches,
      firstName: apiData.firstName,
      fullName: apiData.fullName,
      height: apiData.height,
      id: apiData.id,
      isAlternateCaptain: apiData.alternateCaptain,
      isCaptain: apiData.captain,
      isRookie: apiData.rookie,
      jerseyNumber: apiData.primaryNumber,
      lastName: apiData.lastName,
      position: apiData.primaryPosition.name,
      rosterStatus: apiData.rosterStatus,
      weight: apiData.weight,
    };
    return player;
  }

  private playerIds: Array<number>;
  constructor(...ids: Array<number>) {
    super();
    this.playerIds = ids;
    this.initUri();
  }
  public clear() {
    this.initUri();
  }
  public initUri() {
    this.uri = `${PEOPLE_ENDPOINT}?personIds=${this.playerIds.join(',')}`;
  }
  /**
   * @description This method is used after building of the URI is complete. It will fetch and parse the NHL API data.
   * @returns {Player[]}
   */
  public async data(): Promise<Array<Player>> {
    try {
      const apiData = await this.load();
      return this.parseData<Player>(apiData, 'people', People.toPlayer);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default People;
