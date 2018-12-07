import Conference from './Conference';
import Division from './Division';
import Player from './Player';
import Venue from './Venue';

/**
 * A representation of an NHL Team.
 * @interface
 * @property {string} abbreviation - The teams name in abbpreviated form.
 * @property {boolean} active - Indicates whether the team is currently active in the NHL.
 */
export default interface Team {
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
