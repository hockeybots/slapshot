import Teams from '../Teams';
import { Team } from '../types';

describe('Api', () => {
  describe('Teams', () => {
    describe('uri', () => {
      describe('when not expanding', () => {
        describe('when requesting one team', () => {
          const team = new Teams(1);

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1');
          });
        });
        describe('when requesting mutlitple teams', () => {
          const team = new Teams(1, 2, 3, 4);

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1,2,3,4');
          });
        });
      });
      describe('when expanding', () => {
        describe('withRoster', () => {
          const team = new Teams(1).withRoster();

          // Assure no duplication
          team
            .withRoster()
            .withRoster()
            .withRoster()
            .withRoster()
            .withRoster()
            .withRoster();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.roster');
          });
        });
        describe('withPreviousGame', () => {
          const team = new Teams(1).withPreviousGame();

          // Assure no duplication
          team
            .withPreviousGame()
            .withPreviousGame()
            .withPreviousGame()
            .withPreviousGame()
            .withPreviousGame()
            .withPreviousGame();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.schedule.previous');
          });
        });
        describe('withNextGame', () => {
          const team = new Teams(1).withNextGame();

          // Assure no duplication
          team
            .withNextGame()
            .withNextGame()
            .withNextGame()
            .withNextGame()
            .withNextGame()
            .withNextGame();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.schedule.next');
          });
        });
        describe('withStats', () => {
          const team = new Teams(1).withStats();

          // Assure no duplication
          team
            .withStats()
            .withStats()
            .withStats()
            .withStats()
            .withStats()
            .withStats();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.stats');
          });
        });
        describe('all', () => {
          const team = new Teams(1).all();

          // Assure no duplication
          team
            .all()
            .all()
            .all()
            .all()
            .all()
            .all();

          it('should return the correct uri', () => {
            expect(team.uri).toBe(
              `https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.roster&expand=team.stats&expand=team.schedule.previous&expand=team.schedule.next`,
            );
          });
        });
        describe('clear', () => {
          const team = new Teams(1).all();

          // Assure no duplication
          team
            .all()
            .all()
            .all()
            .all()
            .all()
            .all();

          team.clear();

          it('should return the correct uri', () => {
            expect(team.uri).toBe(`https://statsapi.web.nhl.com/api/v1/teams?teamId=1`);
          });
        });
      });
    });
    describe('toConference', () => {
      const mockApiData = {
        abbreviation: 'WW',
        active: true,
        id: 1,
        name: 'Wild West',
        shortName: 'Wild',
      };
      it('should return a conference object with the correct abbreviation', () => {
        expect(Teams.toConference(mockApiData).abbreviation).toBe(mockApiData.abbreviation);
      });
      it('should return a conference object with the correct active status', () => {
        expect(Teams.toConference(mockApiData).active).toBe(mockApiData.active);
      });
      it('should return a conference object with the correct id', () => {
        expect(Teams.toConference(mockApiData).id).toBe(mockApiData.id);
      });
      it('should return a conference object with the correct name', () => {
        expect(Teams.toConference(mockApiData).name).toBe(mockApiData.name);
      });
      it('should return a conference object with the correct short name', () => {
        expect(Teams.toConference(mockApiData).shortName).toBe(mockApiData.shortName);
      });
    });
    describe('toDivision', () => {
      const mockApiData = {
        abbreviation: 'GB',
        active: true,
        id: 5,
        name: 'Gummy Bears',
        nameShort: 'Gummy',
      };
      it('should return a division object with the correct abbreviation', () => {
        expect(Teams.toDivision(mockApiData).abbreviation).toBe(mockApiData.abbreviation);
      });
      it('should return a division object with the correct active status', () => {
        expect(Teams.toDivision(mockApiData).active).toBe(mockApiData.active);
      });
      it('should return a division object with the correct id', () => {
        expect(Teams.toDivision(mockApiData).id).toBe(mockApiData.id);
      });
      it('should return a division object with the correct name', () => {
        expect(Teams.toDivision(mockApiData).name).toBe(mockApiData.name);
      });
      it('should return a division object with the correct short name', () => {
        expect(Teams.toDivision(mockApiData).nameShort).toBe(mockApiData.nameShort);
      });
    });
    describe('toVenue', () => {
      const mockApiData = {
        city: 'Tokyooo',
        name: 'Battle Dome',
        timeZone: {
          tz: 'TST',
          offset: 666,
          id: 'Tokyo Battle Time',
        },
      };
      it('should return a venue object with the correct city', () => {
        expect(Teams.toVenue(mockApiData).city).toBe(mockApiData.city);
      });
      it('should return a venue object with the correct name', () => {
        expect(Teams.toVenue(mockApiData).name).toBe(mockApiData.name);
      });
      it('should return a venue object with the correct timeZoneName', () => {
        expect(Teams.toVenue(mockApiData).timeZoneName).toBe(mockApiData.timeZone.id);
      });
      it('should return a venue object with the correct timeZoneAbbreviation', () => {
        expect(Teams.toVenue(mockApiData).timeZoneAbbreviation).toBe(mockApiData.timeZone.tz);
      });
      it('should return a venue object with the correct utc offset', () => {
        expect(Teams.toVenue(mockApiData).utcOffset).toBe(mockApiData.timeZone.offset);
      });
    });
    describe('toTeam', () => {
      const mockApiData = {
        abbreviation: 'RZR',
        active: true,
        firstYearOfPlay: 1999,
        id: 80085,
        locationName: 'Battle Dome Zone',
        name: 'Wreck City Razors',
        shortName: 'Razors',
        officialSiteUrl: 'https://getwrecked.co.jp',
        teamName: 'Razors',
        division: {
          abbreviation: 'GB',
          active: true,
          id: 5,
          name: 'Gummy Bears',
          nameShort: 'Gummy',
        },
        conference: {
          abbreviation: 'WW',
          active: true,
          id: 1,
          name: 'Wild West',
          shortName: 'Wild',
        },
        venue: {
          city: 'Tokyooo',
          name: 'Battle Dome',
          timeZone: {
            tz: 'TST',
            offset: 666,
            id: 'Tokyo Battle Time',
          },
        },
      };
      it('should return a team object with the correct data', async () => {
        const team = await Teams.toTeam(mockApiData, false, false, false, false);
        expect(team).toMatchSnapshot();
      });
    });
    describe('parseData', () => {
      describe('when data IS NOT passed', () => {
        it('handles the error', () => {
          const player = new Teams(1);
          expect(
            player.parseData<Team>(null, 'teams', (apiDataItem) =>
              Teams.toTeam(apiDataItem, false, false, false, false),
            ),
          ).rejects.toBe('Unable to parse, missing data');
        });
      });
      describe('when data IS passed', () => {
        it('returns an array of Team objects', () => {
          const player = new Teams(1);
          const mockApiData = {
            copyright:
              'NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.',
            teams: [
              {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1',
                venue: {
                  name: 'Prudential Center',
                  link: '/api/v1/venues/null',
                  city: 'Newark',
                  timeZone: {
                    id: 'America/New_York',
                    offset: -5,
                    tz: 'EST',
                  },
                },
                abbreviation: 'NJD',
                teamName: 'Devils',
                locationName: 'New Jersey',
                firstYearOfPlay: '1982',
                division: {
                  id: 18,
                  name: 'Metropolitan',
                  nameShort: 'Metro',
                  link: '/api/v1/divisions/18',
                  abbreviation: 'M',
                },
                conference: {
                  id: 6,
                  name: 'Eastern',
                  link: '/api/v1/conferences/6',
                },
                franchise: {
                  franchiseId: 23,
                  teamName: 'Devils',
                  link: '/api/v1/franchises/23',
                },
                shortName: 'New Jersey',
                officialSiteUrl: 'http://www.newjerseydevils.com/',
                franchiseId: 23,
                active: true,
              },
            ],
          };

          const expectedOutput: Array<Team> = [
            {
              abbreviation: 'NJD',
              active: true,
              firstYearOfPlay: '1982',
              id: 1,
              locationName: 'New Jersey',
              name: 'New Jersey Devils',
              shortName: 'New Jersey',
              siteUrl: 'http://www.newjerseydevils.com/',
              teamName: 'Devils',
              division: {
                id: 18,
                name: 'Metropolitan',
                nameShort: 'Metro',
                abbreviation: 'M',
                active: true,
              },
              venue: {
                city: 'Newark',
                name: 'Prudential Center',
                timeZoneAbbreviation: 'EST',
                timeZoneName: 'America/New_York',
                utcOffset: -5,
              },
            },
          ];

          expect(
            player.parseData<Team>(mockApiData, 'teams', (team) => Teams.toTeam(team, false, false, false, false)),
          ).resolves.toEqual(expectedOutput);
        });
      });
    });
  });
});
