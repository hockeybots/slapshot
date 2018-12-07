import { PEOPLE_ENDPOINT } from '../../endpoints';
import { Player } from '../types';

import Endpoint from '../Endpoint';

/**
 * People endpoint wrapper
 */
class People extends Endpoint {
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
  }
  public clear() {
    this.initUri();
  }
  public initUri() {
    this.uri = `${PEOPLE_ENDPOINT}?personIds=${this.playerIds.join(',')}`;
  }
  public async data(): Promise<Array<Player>> {
    try {
      const apiData = await this.load();
      return this.parseData(apiData);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  public async parseData(apiData: any): Promise<Array<Player>> {
    return Promise.all<Player>(apiData.data.people.map((person: any) => People.toPlayer(person)));
  }
}

export default People;
