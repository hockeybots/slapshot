import { TEAMS_ENDPOINT } from '../../endpoints';
import { Conference, Division, Player, Team, Venue } from '../types';

import Endpoint from '../Endpoint';
import People from '../People';

/**
 * Teams endpoint wrapper
 */
class Teams extends Endpoint {
  private roster: boolean = false;
  private previousGame: boolean = false;
  private nextGame: boolean = false;
  private stats: boolean = false;

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
    this.roster = true;
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
      timeZoneAbbreviation: apiData.timeZone.tz,
      timeZoneName: apiData.timeZone.id,
      utcOffset: apiData.timeZone.offset,
    };
  }
  private async toTeam(apiData: any): Promise<Team> {
    const team: Team = {
      abbreviation: apiData.abbreviation,
      active: apiData.active,
      conference: this.toConference(apiData.conference),
      division: this.toDivision(apiData.division),
      firstYearOfPlay: apiData.firstYearOfPlay,
      id: apiData.id,
      locationName: apiData.locationName,
      name: apiData.name,
      shortName: apiData.shortName,
      siteUrl: apiData.officialSiteUrl,
      teamName: apiData.teamName,
      venue: this.toVenue(apiData.venue),
    };
    if (this.roster) {
      const ids = apiData.roster.roster.map((rosterMember: any) => rosterMember.person.id);
      team.roster = await new People(ids).data();
    }
    return team;
  }
  private async parseData(apiData: any): Promise<Array<Team>> {
    return Promise.all<Team>(apiData.data.teams.map((team: any) => this.toTeam(team)));
  }
}

export default Teams;
