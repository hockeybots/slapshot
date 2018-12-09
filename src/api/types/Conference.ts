/**
 * @typedef {object} Conference
 * @property {string} abbreviation - The abbreviation for the conference.
 * @property {active} active - Whether the conference is active or not.
 * @property {number} id - ID for the conference as returned by the NHL API.
 * @property {string} name - The name of the conference.
 * @property {string} shortName - The short name for the conference (EG: West for Western).
 * @description A representation of an NHL Conference.
 */
interface Conference {
  abbreviation: string;
  active: boolean;
  id: number;
  name: string;
  shortName: string;
}

export default Conference;
