/**
 * Base endpoint of the NHL API
 */
const BASE_ENDPOINT = 'https://statsapi.web.nhl.com/api/v1';

/**
 * Composes BASE_ENDPOINT with the target path to create a valid endpoint
 * @param {string} path The target path, for example "teams" or "people"
 * @returns {string} The composed endpoint
 */
const genEndpoint = (path: string) => `${BASE_ENDPOINT}/${path}`;

const TEAMS_ENDPOINT = genEndpoint('teams');

export { genEndpoint, TEAMS_ENDPOINT };
