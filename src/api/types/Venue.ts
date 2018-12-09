/**
 * @typedef {object} Venue
 * @property {string} city - The city the venue is located in.
 * @property {string} name - The name of the venue.
 * @property {string} timeZoneAbbreviation - The abbreviation of the timezone.
 * @property {string} timeZoneName - The name of the timezone.
 * @property {number} utcOffset - UTC offset.
 * @description A representation of an NHL Venue.
 */
interface Venue {
  city: string;
  name: string;
  timeZoneAbbreviation: string;
  timeZoneName: string;
  utcOffset: number;
}

export default Venue;
