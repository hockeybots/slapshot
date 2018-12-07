import Conference from './Conference';
import Division from './Division';
import Venue from './Venue';

export default interface Team {
  abbreviation: string;
  active: boolean;
  conference: Conference;
  division: Division;
  firstYearOfPlay: string;
  id: number;
  locationName: string;
  name: string;
  shortName: string;
  siteUrl: string;
  teamName: string;
  venue: Venue;
}
