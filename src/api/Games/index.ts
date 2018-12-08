import idx from 'idx';

import { GAME_ENDPOINT } from '../../endpoints';
import { BoxScore, Game, GameContent, LineScore } from '../types';

import Endpoint from '../Endpoint';

/**
 * People endpoint wrapper
 * @extends Endpoint
 * @description An abstraction of the {PEOPLE_ENDPOINT} with a fluent API
 */
class Games extends Endpoint {
  /**
   * This method will transform API data in to a Player object.
   * @param apiData {object} - The game object of the response from the NHL API
   * @returns {Game}
   */
  public static async toGame(apiData: any): Promise<Game> {
    const game: Game = {
      id: apiData.id,
    };
    return game;
  }

  private boxScore: boolean = false;
  private lineScore: boolean = false;
  private content: boolean = false;

  private gameId: number;
  constructor(id: number) {
    super();
    this.gameId = id;
    this.initUri();
  }
  public clear() {
    this.initUri();
  }
  public initUri() {
    this.uri = `${GAME_ENDPOINT}/${this.gameId}`;
  }
  /**
   * @description This method is used after building of the URI is complete. It will fetch and parse the NHL API data.
   * @returns {Game}
   */
  public async data(): Promise<Game> {
    if (!this.lineScore && !this.boxScore) {
      return Promise.reject('To fetch data you must request a game withBoxScore or withLineScore');
    }
    try {
      let game: any;
      if (this.boxScore) {
        this.clear();
        this.appendToUri('boxscore');

        const apiData = await this.load();
        const boxScoreData = await this.parseBoxScoreData(apiData);
        game = {
          id: boxScoreData.id,
        };
      }
      if (this.lineScore) {
        this.clear();
        this.appendToUri('linescore');

        const apiData = await this.load();
        const boxScoreData = await this.parseLineScoreData(apiData);
        game = {
          id: boxScoreData.id,
        };
      }
      if (this.content) {
        this.clear();
        this.appendToUri('content');

        const apiData = await this.load();
        const boxScoreData = await this.parseContentData(apiData);
        game = {
          id: boxScoreData.id,
        };
      }
      return game;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  /**
   * @description This method will add the necessary query string to the URI for including the roster data.
   * When parsing the API data we map all people ids from the roster to make a call to the
   * PEOPLE_ENDPOINT for rich data.
   * @returns {Games}
   */
  public withBoxScore(): this {
    if (!this.boxScore) {
      this.boxScore = true;
    }
    return this;
  }
  /**
   * @description This method will add the necessary query string to the URI for including the roster data.
   * When parsing the API data we map all people ids from the roster to make a call to the
   * PEOPLE_ENDPOINT for rich data.
   * @returns {Games}
   */
  public withLineScore(): this {
    if (!this.lineScore) {
      this.lineScore = true;
    }
    return this;
  }
  /**
   * @description This method will parse the raw NHL API data in to an array of Player objects.
   * @param {object} apiData The raw NHL API data
   * @returns {Game}
   */
  public async parseBoxScoreData(apiData: any): Promise<BoxScore> {
    const people = idx(apiData, (_) => _.people);
    if (!people || !Array.isArray(people)) {
      return Promise.reject('Unable to parse, missing data');
    }
    return Promise.all<Player>(people.map((person: any) => People.toPlayer(person)));
  }
  /*
   * @description This method will parse the raw NHL API data in to an array of Player objects.
   * @param {object} apiData The raw NHL API data
   * @returns {Game}
   */
  public async parseLineScoreData(apiData: any): Promise<LineScore> {
    const people = idx(apiData, (_) => _.people);
    if (!people || !Array.isArray(people)) {
      return Promise.reject('Unable to parse, missing data.');
    }
    return Promise.all<Player>(people.map((person: any) => People.toPlayer(person)));
  }
  /*
   * @description This method will parse the raw NHL API data in to an array of Player objects.
   * @param {object} apiData The raw NHL API data
   * @returns {Game}
   */
  public async parseContentData(apiData: any): Promise<GameContent> {
    const people = idx(apiData, (_) => _.people);
    if (!people || !Array.isArray(people)) {
      return Promise.reject('Unable to parse, missing data');
    }
    return Promise.all<Player>(people.map((person: any) => People.toPlayer(person)));
  }
}

export default Games;
