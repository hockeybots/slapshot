import Conference from './Conference';
import Division from './Division';
import Player from './Player';
import Venue from './Venue';

/**
 * @typedef {object} Team
 * @property {string} abbreviation - The team's name in abbpreviated form.
 * @property {boolean} active - Indicates whether the team is currently active in the NHL.
 * @property {Conference} conference - The conference data that the team belongs to.
 * @property {Division} division - The division data that the team belongs to.
 * @property {string} firstYearOfPlay - The first year the team played in the league.
 * @property {number} id - The ID of the team in the API (1: New Jersey, 21: Colorado, etc).
 * @property {string} locationName - The team's location name. EG: "Anaheim" for the Ducks.
 * @property {string} name - The team's full name. EG: "Anaheim Ducks".
 * @property {Array<Player>} [roster] - Array of players on the team. Optional.
 * @property {string} shortName - The team's short name. EG: "NY Islanders" for NYI.
 * @property {string} siteUrl - The team's official website url.
 * @property {string} teamName - The team's name. EG: "Ducks" for Anaheim.
 * @property {Venue} venue - Data of the venue the team plays in.
 * @description - A representation of a team.
 */
interface Team {
  abbreviation: string;
  active: boolean;
  conference: Conference;
  division: Division;
  firstYearOfPlay: string;
  id: number;
  locationName: string;
  name: string;
  roster?: Array<Player>;
  shortName: string;
  siteUrl: string;
  teamName: string;
  venue: Venue;
}

export default Team;
