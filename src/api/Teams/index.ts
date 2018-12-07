import { TEAMS_ENDPOINT } from '../../endpoints';
import { Conference, Division, Team, Venue } from '../types';

import Endpoint from '../Endpoint';

/**
 * Teams endpoint wrapper
 */
class Teams extends Endpoint {
  constructor(...ids: Array<number>) {
    super();
    this.uri = `${TEAMS_ENDPOINT}?teamId=${ids.join(',')}`;
  }
  public async data(): Promise<Array<Team>> {
    try {
      const apiData = await this.load();
      return this.parseData(apiData);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
  public withRoster(): this {
    this.uri = `${this.uri}&expand=team.roster`;
    return this;
  }
  public withPreviousGame(): this {
    this.uri = `${this.uri}&expand=team.schedule.previous`;
    return this;
  }
  public withNextGame(): this {
    this.uri = `${this.uri}&expand=team.schedule.next`;
    return this;
  }
  public withStats(): this {
    this.uri = `${this.uri}&expand=team.stats`;
    return this;
  }
  public all(): this {
    return this.withRoster()
      .withStats()
      .withPreviousGame()
      .withNextGame();
  }
  private toConference(apiData: any): Conference {
    return {
      name: apiData.name,
    };
  }
  private toDivision(apiData: any): Division {
    return {
      abbreviation: apiData.abbreviation,
      name: apiData.name,
    };
  }
  private toVenue(apiData: any): Venue {
    return {
      city: apiData.city,
      name: apiData.name,
      timeZone: apiData.timeZone.tz,
    };
  }
  private toTeam(apiData: any): Team {
    return {
      abbreviation: apiData.abbreviation,
      active: apiData.active,
      conference: this.toConference(apiData.conference),
      division: this.toDivision(apiData.division),
      firstYearOfPlay: apiData.firstYearOfPlay,
      id: apiData.id,
      locationName: apiData.locationName,
      name: apiData.name,
      shortName: apiData.shortName,
      siteUrl: apiData.siteUrl,
      teamName: apiData.teamName,
      venue: this.toVenue(apiData.venue),
    };
  }
  private async parseData(apiData: Array<any>): Promise<Array<Team>> {
    return apiData.map(this.toTeam);
  }
}

export default Teams;
