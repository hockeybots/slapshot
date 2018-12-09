import Conference from './Conference';
import Team from './Team';

/**
 * @typedef {object} Division
 * @property {string} abbreviation - The divisions abbreviated name.
 * @property {boolean} active - Whether the division is active or not.
 * @property {Conference} conference - Data on the conference the division belongs to.
 * @property {id} id - The ID of the division as returned by the NHL API.
 * @property {string} name - The name of the division.
 * @property {shortName} shortName - The short name of the divison. (EG: ATL for Atrlanic).
 * @property {Array<Teams>} [teams] - Array of teams in the division. Optional.
 * @description - A representation of an NHL Division.
 */
interface Division {
  abbreviation: string;
  active: boolean;
  conference: Conference;
  id: number;
  name: string;
  shortName: string;
  teams?: Array<Team>;
}

export default Division;
