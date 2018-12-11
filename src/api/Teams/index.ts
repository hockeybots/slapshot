import idx from 'idx';

import { TEAMS_ENDPOINT } from '../../endpoints';
import { Conference, Division, Game, Team, Venue } from '../types';

import Endpoint from '../Endpoint';
import People from '../People';

/**
 * Teams endpoint wrapper
 * @extends Endpoint
 * @description An abstraction of the {TEAMS_ENDPOINT} with a fluent API
 */
class Teams extends Endpoint {
  /**
   * This method will transform API data in to a Conference object.
   * @param apiData {object} - The conference object of the response from the NHL API
   * @returns {Conference}
   */
  public static toConference(apiData: any): Conference {
    return {
      abbreviation: apiData.abbreviation,
      active: apiData.active,
      id: apiData.id,
      name: apiData.name,
      shortName: apiData.shortName,
    };
  }
  /**
   * This method will transform API data in to a Division object.
   * @param apiData {object} - The division object of the response from the NHL API
   * @returns {Division}
   */
  public static toDivision(apiData: any): Division {
    // TODO: Change conference to optional and fetch conference from endpoint if withConference.
    return {
      abbreviation: apiData.abbreviation,
      active: apiData.active,
      conference: this.toConference(apiData.conference),
      id: apiData.id,
      name: apiData.name,
      shortName: apiData.shortName,
    };
  }
  /**
   * This method will transform API data in to a Venue object.
   * @param apiData {object} - The venue object of the response from the NHL API
   * @returns {Venue}
   */
  public static toVenue(apiData: any): Venue {
    return {
      city: apiData.city,
      name: apiData.name,
      timeZoneAbbreviation: apiData.timeZone.tz,
      timeZoneName: apiData.timeZone.id,
      utcOffset: apiData.timeZone.offset,
    };
  }
  /**
   * This method will transform API data in to a Team object.
   * @param apiData {object} - The Team object of the response from the NHL API
   * @param roster {boolean} - Used to determine whether or not to parse roster data
   * @param previousGame {boolean} - Used to determine whether or not to parse previous game data
   * @param nextGame {boolean} - Used to determine whether or not to parse next game data
   * @param stats {boolean} - Used to determine whether or not to parse stats data
   * @returns {Team}
   */
  public static async toTeam(
    apiData: any,
    roster: boolean,
    previousGame: boolean,
    nextGame: boolean,
    stats: boolean,
  ): Promise<Team> {
    const team: Team = {
      abbreviation: apiData.abbreviation,
      active: apiData.active,
      conference: Teams.toConference(apiData.conference),
      division: Teams.toDivision(apiData.division),
      firstYearOfPlay: apiData.firstYearOfPlay,
      id: apiData.id,
      locationName: apiData.locationName,
      name: apiData.name,
      shortName: apiData.shortName,
      siteUrl: apiData.officialSiteUrl,
      teamName: apiData.teamName,
      venue: Teams.toVenue(apiData.venue),
    };
    if (roster) {
      const rosterIds = idx(apiData, (_) => _.roster.roster.map((rosterMember: any) => rosterMember.person.id));
      if (rosterIds && Array.isArray(rosterIds)) {
        team.roster = await new People(...rosterIds).data();
      }
    }
    if (previousGame) {
      const rosterIds = idx(apiData, (_) => _.roster.roster.map((rosterMember: any) => rosterMember.person.id));
    }
    return team;
  }

  private roster: boolean = false;
  private previousGame: boolean = false;
  private nextGame: boolean = false;
  private stats: boolean = false;

  private teamIds: Array<number>;
  /**
   * @constructor
   * @param {number[]} ids Target team id's
   */
  constructor(...ids: Array<number>) {
    super();
    this.teamIds = ids;
    this.initUri();
  }

  public clear() {
    this.initUri();
  }
  public initUri() {
    this.uri = `${TEAMS_ENDPOINT}?teamId=${this.teamIds.join(',')}`;
  }

  /**
   * @description This method is used after building of the URI is complete. It will fetch and parse the NHL API data.
   * @returns {Teams[]}
   */
  public async data(): Promise<Array<Team>> {
    try {
      const apiData = await this.load();
      return this.parseData(apiData);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * @description This method will add the necessary query string to the URI for including the roster data.
   * When parsing the API data we map all people ids from the roster to make a call to the
   * PEOPLE_ENDPOINT for rich data.
   * @returns {Teams}
   */
  public withRoster(): this {
    if (!this.roster) {
      this.roster = true;
      this.uri = `${this.uri}&expand=team.roster`;
    }
    return this;
  }
  /**
   * @description This method will add the necessary query string to the URI for including the target team(s)
   * previous game(s) data.
   * @returns {Teams}
   */
  public withPreviousGame(): this {
    if (!this.previousGame) {
      this.previousGame = true;
      this.uri = `${this.uri}&expand=team.schedule.previous`;
    }
    return this;
  }
  /**
   * @description This method will add the necessary query string to the URI for including the target team(s)
   * next game(s) data.
   * @returns {Teams}
   */
  public withNextGame(): this {
    if (!this.nextGame) {
      this.nextGame = true;
      this.uri = `${this.uri}&expand=team.schedule.next`;
    }
    return this;
  }
  /**
   * @description This method will add the necessary query string to the URI for including the target team(s)
   * statistical data.
   * @returns {Teams}
   */
  public withStats(): this {
    if (!this.stats) {
      this.stats = true;
      this.uri = `${this.uri}&expand=team.stats`;
    }
    return this;
  }
  /**
   * @description This method will add all possible query strings to the URI.
   * @returns {Teams}
   */
  public all(): this {
    return this.withRoster()
      .withStats()
      .withPreviousGame()
      .withNextGame();
  }
  /**
   * @description This method will parse the raw NHL API data in to an array of Team objects.
   * @param {object} apiData The raw NHL API data
   * @returns {Team[]}
   */
  public async parseData(apiData: any): Promise<Array<Team>> {
    const teams = idx(apiData, (_) => _.teams);
    if (!teams || !Array.isArray(teams)) {
      return Promise.reject('Unable to parse, missing data');
    }
    return Promise.all<Team>(
      teams.map((team: any) => Teams.toTeam(team, this.roster, this.previousGame, this.nextGame, this.stats)),
    );
  }
}

export default Teams;
