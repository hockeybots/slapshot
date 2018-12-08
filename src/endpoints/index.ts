/**
 * Base endpoint of the NHL Stats API
 * @typedef {string} STATS_API_ENDPOINT
 */
const STATS_API_ENDPOINT = 'https://statsapi.web.nhl.com/api/v1';
/**
 * Base endpoint of the NHL Records API
 * @typedef {string} RECORDS_API_ENDPOINT
 */
const RECORDS_API_ENDPOINT = 'https://records.nhl.com/site/api';

/**
 * @function genEndpoint
 * Composes BASE_ENDPOINT with the target path to create a valid endpoint
 * @param {(STATS_API_ENDPOINT|RECORDS_API_ENDPOINT)} base The root NHL API endpoint
 * @param {string} path The target path, for example "teams" or "people"
 * @returns {string} The composed endpoint
 */
function genEndpoint(base: string, path: string): string {
  return `${base}/${path}`;
}

/**
 * @constant AWARDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL distributed awards
 */
const AWARDS_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'awards');
/**
 * @constant CONFERENCES_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL conferences
 */
const CONFERENCES_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'conferences');
/**
 * @constant DIVISIONS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL divisions
 */
const DIVISIONS_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'divisions');
/**
 * @constant DRAFT_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL draft information
 */
const DRAFT_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'draft');
/**
 * @constant DRAFT_PROSPECTS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL draft proscpect information
 */
const DRAFT_PROSPECTS_ENDPOINT: string = `${DRAFT_ENDPOINT}/prospects`;
/**
 * @constant GAME_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL game information
 */
const GAME_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'game');
/**
 * @constant PEOPLE_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL people and player information
 */
const PEOPLE_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'people');
/**
 * @constant SCHEDULE_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL team schedule information
 */
const SCHEDULE_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'schedule');
/**
 * @constant STANDINGS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL team standings
 */
const STANDINGS_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'standings');
/**
 * @constant STANDINGS_TYPES_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL standing types
 */
const STANDINGS_TYPES_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'standingsTypes');
/**
 * @constant STATS_TYPES_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL stats types
 */
const STATS_TYPES_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'statsTypes');
/**
 * @constant TEAMS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL teams
 */
const TEAMS_ENDPOINT: string = genEndpoint(STATS_API_ENDPOINT, 'teams');
/**
 * @constant ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL all time records against the target franchise
 */
const ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'all-time-record-vs-franchise');
/**
 * @constant ATTENDANCE_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL attendance records
 */
const ATTENDANCE_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'attendance');
/**
 * @constant DRAFT_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL draft records
 */
const DRAFT_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'draft');
/**
 * @constant FRANCHISE_DETAIL_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL franchise record details
 */
const FRANCHISE_DETAIL_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'franchise-detail');
/**
 * @constant FRANCHISE_GOALIE_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL franchise goalie records
 */
const FRANCHISE_GOALIE_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'franchise-goalie-records');
/**
 * @constant FRANCHISE_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL franchise
 */
const FRANCHISE_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'franchise');
/**
 * @constant FRANCHISE_SEASON_RESULTS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL franchise results for a target season
 */
const FRANCHISE_SEASON_RESULTS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'franchise-season-results');
/**
 * @constant FRANCHISE_SKATER_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL franchise skater records
 */
const FRANCHISE_SKATER_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'franchise-skater-records');
/**
 * @constant FRANCHISE_TEAM_TOTALS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL franchise team totals
 */
const FRANCHISE_TEAM_TOTALS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'franchise-team-totals');
/**
 * @constant MILESTONE_1000_POINT_CAREER_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL players who have reached 1000 points in a career
 */
const MILESTONE_1000_POINT_CAREER_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'milestone-1000-point-career');
/**
 * @constant MILESTONE_100_POINT_SEASON_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL players who have reached 100 points in a season
 */
const MILESTONE_100_POINT_SEASON_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'milestone-100-point-season');
/**
 * @constant MILESTONE_500_GOAL_CAREER_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL players who have scored 500 career goals
 */
const MILESTONE_500_GOAL_CAREER_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'milestone-500-goal-career');
/**
 * @constant MILESTONE_50_GOAL_SEASON_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL players who have scored 50 goals in a season
 */
const MILESTONE_50_GOAL_SEASON_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'milestone-50-goal-season');
/**
 * @constant MILESTONE_5_GOAL_GAME_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL players who have scored 5 goals in a game
 */
const MILESTONE_5_GOAL_GAME_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'milestone-5-goal-game');
/**
 * @constant OFFICIALS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL officials
 */
const OFFICIALS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'officials');
/**
 * @constant PLAYER_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL player records
 */
const PLAYER_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'player');
/**
 * @constant PLAYOFFS_SERIES_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL playoff series records
 */
const PLAYOFFS_SERIES_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'playoff-series');
/**
 * @constant PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL playoff records against each target franchise
 */
const PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT: string = genEndpoint(
  RECORDS_API_ENDPOINT,
  'playoff-franchise-vs-franchise',
);
/**
 * @constant RECORD_DETAIL_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL record details
 */
const RECORD_DETAIL_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'record-detail');
/**
 * @constant TROPHY_RECORDS_ENDPOINT
 * @type {string}
 * @description Endpoint used for fetching NHL trophies
 */
const TROPHY_RECORDS_ENDPOINT: string = genEndpoint(RECORDS_API_ENDPOINT, 'trophy');

export {
  genEndpoint,
  STATS_API_ENDPOINT,
  RECORDS_API_ENDPOINT,
  AWARDS_ENDPOINT,
  CONFERENCES_ENDPOINT,
  DIVISIONS_ENDPOINT,
  DRAFT_ENDPOINT,
  DRAFT_PROSPECTS_ENDPOINT,
  GAME_ENDPOINT,
  PEOPLE_ENDPOINT,
  SCHEDULE_ENDPOINT,
  STANDINGS_ENDPOINT,
  STANDINGS_TYPES_ENDPOINT,
  STATS_TYPES_ENDPOINT,
  TEAMS_ENDPOINT,
  // Records API endpoints
  ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT,
  ATTENDANCE_RECORDS_ENDPOINT,
  DRAFT_RECORDS_ENDPOINT,
  FRANCHISE_DETAIL_RECORDS_ENDPOINT,
  FRANCHISE_GOALIE_RECORDS_ENDPOINT,
  FRANCHISE_RECORDS_ENDPOINT,
  FRANCHISE_SEASON_RESULTS_ENDPOINT,
  FRANCHISE_SKATER_RECORDS_ENDPOINT,
  FRANCHISE_TEAM_TOTALS_ENDPOINT,
  MILESTONE_1000_POINT_CAREER_ENDPOINT,
  MILESTONE_100_POINT_SEASON_ENDPOINT,
  MILESTONE_500_GOAL_CAREER_ENDPOINT,
  MILESTONE_50_GOAL_SEASON_ENDPOINT,
  MILESTONE_5_GOAL_GAME_ENDPOINT,
  OFFICIALS_ENDPOINT,
  PLAYER_RECORDS_ENDPOINT,
  PLAYOFFS_SERIES_RECORDS_ENDPOINT,
  PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT,
  RECORD_DETAIL_ENDPOINT,
  TROPHY_RECORDS_ENDPOINT,
};
