/**
 * Base endpoint of the NHL Stats API and Records API
 */
const STATS_API_ENDPOINT = 'https://statsapi.web.nhl.com/api/v1';
const RECORDS_API_ENDPOINT = 'https://records.nhl.com/site/api';

/**
 * Composes BASE_ENDPOINT with the target path to create a valid endpoint
 * @param {string} path The target path, for example "teams" or "people"
 * @returns {string} The composed endpoint
 */
const genEndpoint = (base: string, path: string) => `${base}/${path}`;

/**
 * API endpoints for the NHL Stats API.
 */
const AWARDS_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'awards');
const CONFERENCES_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'conferences');
const DIVISIONS_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'divisions');
const DRAFT_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'draft');
const DRAFT_PROSPECTS_ENDPOINT = `${DRAFT_ENDPOINT}/prospects`;
const GAME_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'game');
const PEOPLE_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'people');
const SCHEDULE_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'schedule');
const STANDINGS_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'standings');
const STANDINGS_TYPES_ENDPOINT = genEndpoint(
  STATS_API_ENDPOINT,
  'standingsTypes',
);
const STATS_TYPES_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'statsTypes');
const TEAMS_ENDPOINT = genEndpoint(STATS_API_ENDPOINT, 'teams');

/**
 * API endpoints for the NHL Records API
 */
const ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'all-time-record-vs-franchise',
);
const ATTENDANCE_RECORDS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'attendance',
);
const DRAFT_RECORDS_ENDPOINT = genEndpoint(RECORDS_API_ENDPOINT, 'draft');
const FRANCHISE_DETAIL_RECORDS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'franchise-detail',
);
const FRANCHISE_GOALIE_RECORDS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'franchise-goalie-records',
);
const FRANCHISE_RECORDS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'franchise',
);
const FRANCHISE_SEASON_RESULTS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'franchise-season-results',
);
const FRANCHISE_SKATER_RECORDS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'franchise-skater-records',
);
const FRANCHISE_TEAM_TOTALS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'franchise-team-totals',
);
const MILESTONE_1000_POINT_CAREER_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'milestone-1000-point-career',
);
const MILESTONE_100_POINT_SEASON_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'milestone-100-point-season',
);
const MILESTONE_500_GOAL_CAREER_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'milestone-500-goal-career',
);
const MILESTONE_50_GOAL_SEASON_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'milestone-50-goal-season',
);
const MILESTONE_5_GOAL_GAME_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'milestone-5-goal-game',
);
const OFFICIALS_ENDPOINT = genEndpoint(RECORDS_API_ENDPOINT, 'officials');
const PLAYER_RECORDS_ENDPOINT = genEndpoint(RECORDS_API_ENDPOINT, 'player');
const PLAYOFFS_SERIES_RECORDS_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'playoff-series',
);
const PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'playoff-franchise-vs-franchise',
);
const RECORD_DETAIL_ENDPOINT = genEndpoint(
  RECORDS_API_ENDPOINT,
  'record-detail',
);
const TROPHY_RECORDS_ENDPOINT = genEndpoint(RECORDS_API_ENDPOINT, 'trophy');

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
