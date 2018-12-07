import { genEndpoint, RECORDS_API_ENDPOINT, STATS_API_ENDPOINT } from '../';

describe('Endpoints', () => {
  describe('genEndpoint', () => {
    const assertGenEndpoint = (actual: string, expected: string, namedExport: string) => {
      it(`it should return the correct endpoint for ${namedExport}`, () => {
        expect(actual).toBe(expected);
      });
    };
    describe('STATS_API_ENDPOINT', () => {
      const expectedStatsEndpoints: {
        [key: string]: { path: string; expected: string };
      } = {
        AWARDS_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/awards',
          path: 'awards',
        },
        CONFERENCES_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/conference',
          path: 'conference',
        },
        DIVISIONS_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/divisions',
          path: 'divisions',
        },
        DRAFT_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/draft',
          path: 'draft',
        },
        DRAFT_PROSPECTS_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/draft/prospects',
          path: 'draft/prospects',
        },
        GAME_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/game',
          path: 'game',
        },
        PEOPLE_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/people',
          path: 'people',
        },
        SCHEDULE_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/schedule',
          path: 'schedule',
        },
        STANDINGS_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/standings',
          path: 'standings',
        },
        STANDINGS_TYPES_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/standingsTypes',
          path: 'standingsTypes',
        },
        STATS_TYPES_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/statsTypes',
          path: 'statsTypes',
        },
        TEAMS_ENDPOINT: {
          expected: 'https://statsapi.web.nhl.com/api/v1/teams',
          path: 'teams',
        },
      };

      Object.keys(expectedStatsEndpoints).forEach((namedExport) => {
        assertGenEndpoint(
          genEndpoint(STATS_API_ENDPOINT, expectedStatsEndpoints[namedExport].path),
          expectedStatsEndpoints[namedExport].expected,
          namedExport,
        );
      });
    });
    describe('RECORDS_API_ENDPOINT', () => {
      const expectedRecordsEndpoints: {
        [key: string]: { path: string; expected: string };
      } = {
        ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/all-time-record-vs-franchise',
          path: 'all-time-record-vs-franchise',
        },
        ATTENDANCE_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/attendance',
          path: 'attendance',
        },
        DRAFT_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/draft',
          path: 'draft',
        },
        FRANCHISE_DETAIL_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/franchise-detail',
          path: 'franchise-detail',
        },
        FRANCHISE_GOALIE_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/franchise-goalie-records',
          path: 'franchise-goalie-records',
        },
        FRANCHISE_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/franchise',
          path: 'franchise',
        },
        FRANCHISE_SEASON_RESULTS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/franchise-season-results',
          path: 'franchise-season-results',
        },
        FRANCHISE_SKATER_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/franchise-skater-records',
          path: 'franchise-skater-records',
        },
        FRANCHISE_TEAM_TOTALS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/franchise-team-totals',
          path: 'franchise-team-totals',
        },
        MILESTONE_1000_POINT_CAREER_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/milestone-1000-point-career',
          path: 'milestone-1000-point-career',
        },
        MILESTONE_100_POINT_SEASON_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/milestone-100-point-career',
          path: 'milestone-100-point-career',
        },
        MILESTONE_500_GOAL_CAREER_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/milestone-500-point-career',
          path: 'milestone-500-point-career',
        },
        MILESTONE_50_GOAL_SEASON_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/milestone-50-point-career',
          path: 'milestone-50-point-career',
        },
        MILESTONE_5_GOAL_GAME_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/milestone-5-point-career',
          path: 'milestone-5-point-career',
        },
        OFFICIALS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/officials',
          path: 'officials',
        },
        PLAYER_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/player',
          path: 'player',
        },
        PLAYOFFS_SERIES_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/playoff-series',
          path: 'playoff-series',
        },
        PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/playoff-franchise-vs-franchise',
          path: 'playoff-franchise-vs-franchise',
        },
        RECORD_DETAIL_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/record-detail',
          path: 'record-detail',
        },
        TROPHY_RECORDS_ENDPOINT: {
          expected: 'https://records.nhl.com/site/api/trophy',
          path: 'trophy',
        },
      };
      Object.keys(expectedRecordsEndpoints).forEach((namedExport) => {
        assertGenEndpoint(
          genEndpoint(RECORDS_API_ENDPOINT, expectedRecordsEndpoints[namedExport].path),
          expectedRecordsEndpoints[namedExport].expected,
          namedExport,
        );
      });
    });
  });
});
