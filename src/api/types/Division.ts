import Conference from './Conference';
import Team from './Team';

/**
 * @typedef {object} Division
 * @property {string} abbreviation - The divisions abbreviated name.
 * @property {boolean} active - Whether the division is active or not.
 * @property {id} id - The ID of the division as returned by the NHL API.
 * @property {string} name - The name of the division.
 * @property {shortName} shortName - The short name of the divison. (EG: ATL for Atrlanic).
 * @description - A representation of an NHL Division.
 */
interface Division {
  abbreviation: string;
  active: boolean;
  id: number;
  name: string;
  shortName: string;
}

export default Division;
