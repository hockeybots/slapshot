import { genEndpoint, STATS_API_ENDPOINT, RECORDS_API_ENDPOINT } from '../';

describe('Endpoints', () => {
  describe('genEndpoint', () => {
    const assertGenEndpoint = (
      actual: string,
      expected: string,
      namedExport: string,
    ) => {
      it(`it should return the correct endpoint for ${namedExport}`, () => {
        expect(actual).toBe(expected);
      });
    };
    describe('STATS_API_ENDPOINT', () => {
      const expectedStatsEndpoints: {
        [key: string]: { path: string; expected: string };
      } = {
        AWARDS_ENDPOINT: {
          path: 'awards',
          expected: 'https://statsapi.web.nhl.com/api/v1/awards',
        },
        CONFERENCES_ENDPOINT: {
          path: 'conference',
          expected: 'https://statsapi.web.nhl.com/api/v1/conference',
        },
        DIVISIONS_ENDPOINT: {
          path: 'divisions',
          expected: 'https://statsapi.web.nhl.com/api/v1/divisions',
        },
        DRAFT_ENDPOINT: {
          path: 'draft',
          expected: 'https://statsapi.web.nhl.com/api/v1/draft',
        },
        DRAFT_PROSPECTS_ENDPOINT: {
          path: 'draft/prospects',
          expected: 'https://statsapi.web.nhl.com/api/v1/draft/prospects',
        },
        GAME_ENDPOINT: {
          path: 'game',
          expected: 'https://statsapi.web.nhl.com/api/v1/game',
        },
        PEOPLE_ENDPOINT: {
          path: 'people',
          expected: 'https://statsapi.web.nhl.com/api/v1/people',
        },
        SCHEDULE_ENDPOINT: {
          path: 'schedule',
          expected: 'https://statsapi.web.nhl.com/api/v1/schedule',
        },
        STANDINGS_ENDPOINT: {
          path: 'standings',
          expected: 'https://statsapi.web.nhl.com/api/v1/standings',
        },
        STANDINGS_TYPES_ENDPOINT: {
          path: 'standingsTypes',
          expected: 'https://statsapi.web.nhl.com/api/v1/standingsTypes',
        },
        STATS_TYPES_ENDPOINT: {
          path: 'statsTypes',
          expected: 'https://statsapi.web.nhl.com/api/v1/statsTypes',
        },
        TEAMS_ENDPOINT: {
          path: 'teams',
          expected: 'https://statsapi.web.nhl.com/api/v1/teams',
        },
      };

      Object.keys(expectedStatsEndpoints).forEach(namedExport => {
        assertGenEndpoint(
          genEndpoint(
            STATS_API_ENDPOINT,
            expectedStatsEndpoints[namedExport].path,
          ),
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
          path: 'all-time-record-vs-franchise',
          expected:
            'https://records.nhl.com/site/api/all-time-record-vs-franchise',
        },
        ATTENDANCE_RECORDS_ENDPOINT: {
          path: 'attendance',
          expected: 'https://records.nhl.com/site/api/attendance',
        },
        DRAFT_RECORDS_ENDPOINT: {
          path: 'draft',
          expected: 'https://records.nhl.com/site/api/draft',
        },
        FRANCHISE_DETAIL_RECORDS_ENDPOINT: {
          path: 'franchise-detail',
          expected: 'https://records.nhl.com/site/api/franchise-detail',
        },
        FRANCHISE_GOALIE_RECORDS_ENDPOINT: {
          path: 'franchise-goalie-records',
          expected: 'https://records.nhl.com/site/api/franchise-goalie-records',
        },
        FRANCHISE_RECORDS_ENDPOINT: {
          path: 'franchise',
          expected: 'https://records.nhl.com/site/api/franchise',
        },
        FRANCHISE_SEASON_RESULTS_ENDPOINT: {
          path: 'franchise-season-results',
          expected: 'https://records.nhl.com/site/api/franchise-season-results',
        },
        FRANCHISE_SKATER_RECORDS_ENDPOINT: {
          path: 'franchise-skater-records',
          expected: 'https://records.nhl.com/site/api/franchise-skater-records',
        },
        FRANCHISE_TEAM_TOTALS_ENDPOINT: {
          path: 'franchise-team-totals',
          expected: 'https://records.nhl.com/site/api/franchise-team-totals',
        },
        MILESTONE_1000_POINT_CAREER_ENDPOINT: {
          path: 'milestone-1000-point-career',
          expected:
            'https://records.nhl.com/site/api/milestone-1000-point-career',
        },
        MILESTONE_100_POINT_SEASON_ENDPOINT: {
          path: 'milestone-100-point-career',
          expected:
            'https://records.nhl.com/site/api/milestone-100-point-career',
        },
        MILESTONE_500_GOAL_CAREER_ENDPOINT: {
          path: 'milestone-500-point-career',
          expected:
            'https://records.nhl.com/site/api/milestone-500-point-career',
        },
        MILESTONE_50_GOAL_SEASON_ENDPOINT: {
          path: 'milestone-50-point-career',
          expected:
            'https://records.nhl.com/site/api/milestone-50-point-career',
        },
        MILESTONE_5_GOAL_GAME_ENDPOINT: {
          path: 'milestone-5-point-career',
          expected: 'https://records.nhl.com/site/api/milestone-5-point-career',
        },
        OFFICIALS_ENDPOINT: {
          path: 'officials',
          expected: 'https://records.nhl.com/site/api/officials',
        },
        PLAYER_RECORDS_ENDPOINT: {
          path: 'player',
          expected: 'https://records.nhl.com/site/api/player',
        },
        PLAYOFFS_SERIES_RECORDS_ENDPOINT: {
          path: 'playoff-series',
          expected: 'https://records.nhl.com/site/api/playoff-series',
        },
        PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT: {
          path: 'playoff-franchise-vs-franchise',
          expected:
            'https://records.nhl.com/site/api/playoff-franchise-vs-franchise',
        },
        RECORD_DETAIL_ENDPOINT: {
          path: 'record-detail',
          expected: 'https://records.nhl.com/site/api/record-detail',
        },
        TROPHY_RECORDS_ENDPOINT: {
          path: 'trophy',
          expected: 'https://records.nhl.com/site/api/trophy',
        },
      };
      Object.keys(expectedRecordsEndpoints).forEach(namedExport => {
        assertGenEndpoint(
          genEndpoint(
            RECORDS_API_ENDPOINT,
            expectedRecordsEndpoints[namedExport].path,
          ),
          expectedRecordsEndpoints[namedExport].expected,
          namedExport,
        );
      });
    });
  });
});
