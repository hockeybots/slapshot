/**
 * @typedef {object} Player
 * @property {string} fullName The full name of the player.
 * @description A representation of an NHL Player.
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
