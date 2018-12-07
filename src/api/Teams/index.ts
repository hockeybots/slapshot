import { TEAMS_ENDPOINT } from '../../endpoints';

/**
 * Teams endpoint wrapper
 */
interface Team {
  id: number;
}
class Teams {
  public uri: string;
  constructor(...ids: Array<number>) {
    this.uri = `${TEAMS_ENDPOINT}?teamId=${ids.join(',')}`;
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
  public fetch(): Team {
    return {
      id: 0,
    };
  }
}

export default Teams;
