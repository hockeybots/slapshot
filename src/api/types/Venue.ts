/**
 * @typedef {object} Venue
 * @property {string} name - The name of the venue.
 * @description A representation of an NHL Venue.
 */
interface Venue {
  city: string;
  name: string;
  timeZoneName: string;
  timeZoneAbbreviation: string;
  utcOffset: number;
}

export default Venue;
