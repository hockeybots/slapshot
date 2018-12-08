/**
 * @typedef {object} Player
 * @property {number} age - A player's age.
 * @property {Date} birthDate - A player's birth date.
 * @property {string} birthPlace - Where a player was born.
 * @property {string} dominantSide - The side in which a skater shoots, or a goalie catches.
 * @property {string} firstName - A player's first name.
 * @property {string} fullName - A player's full name.
 * @property {string} height - How tall a player is.
 * @property {string} id - The ID of the player returned by the NHL API.
 * @property {boolean} isAlternateCaptain - Whether a player is an alternate captain or not.
 * @property {boolean} isCaptain - Whether a player is a captain or not.
 * @property {boolean} isRookie - Whether a player is a rookie or not.
 * @property {string} jerseyNumber - The number a player wears on their jersey.
 * @property {string} lastName - A player's last name.
 * @property {string} position - The position a player plays.
 * @property {string} rosterStatus - Whether a player is on the roster or not. (Y, N, I).
 * @property {string} weight - How much a player weighs.
 * @description - A representation of a PLayer.
 */
interface Player {
  age: number;
  birthDate: Date;
  birthplace: string;
  dominantSide: string;
  firstName: string;
  fullName: string;
  height: string;
  id: number;
  isAlternateCaptain: boolean;
  isCaptain: boolean;
  isRookie: boolean;
  jerseyNumber: string;
  lastName: string;
  position: string;
  rosterStatus: string;
  weight: number;
}

export default Player;
