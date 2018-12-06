import { TEAMS_ENDPOINT } from '../../endpoints';

interface Team {
  id: number;
}
class Teams {
  uri: string;
  constructor(...ids: Array<number>) {
    this.uri = `${TEAMS_ENDPOINT}?teamId=${ids.join(',')}`;
  }
  withRoster(): this {
    this.uri = `${this.uri}&expand=team.roster`;
    return this;
  }
  withPreviousGame(): this {
    this.uri = `${this.uri}&expand=team.schedule.previous`;
    return this;
  }
  withNextGame(): this {
    this.uri = `${this.uri}&expand=team.schedule.next`;
    return this;
  }
  withStats(): this {
    this.uri = `${this.uri}&expand=team.stats`;
    return this;
  }
  all(): this {
    return this.withRoster()
      .withStats()
      .withPreviousGame()
      .withNextGame();
  }
  fetch(): Team {
    return {
      id: 0
    };
  }
}

export default Teams;
