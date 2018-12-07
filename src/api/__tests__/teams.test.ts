import Teams from '../Teams';

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

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.roster');
          });
        });
        describe('withPreviousGame', () => {
          const team = new Teams(1).withPreviousGame();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.schedule.previous');
          });
        });
        describe('withNextGame', () => {
          const team = new Teams(1).withNextGame();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.schedule.next');
          });
        });
        describe('withStats', () => {
          const team = new Teams(1).withStats();

          it('should return the correct uri', () => {
            expect(team.uri).toBe('https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.stats');
          });
        });
        describe('all', () => {
          const team = new Teams(1).all();

          it('should return the correct uri', () => {
            expect(team.uri).toBe(
              `https://statsapi.web.nhl.com/api/v1/teams?teamId=1&expand=team.roster&expand=team.stats&expand=team.schedule.previous&expand=team.schedule.next`,
            );
          });
        });
      });
    });
    describe('toConference', () => {
      const mockApiData = {
        name: 'Wild West',
      };
      it('should return a conference object with the correct name', () => {
        expect(Teams.toConference(mockApiData).name).toBe(mockApiData.name);
      });
    });
    describe('toDivision', () => {
      const mockApiData = {
        abbreviation: 'GB',
        name: 'Gummy Bears',
      };
      it('should return a division object with the correct name', () => {
        expect(Teams.toDivision(mockApiData).name).toBe(mockApiData.name);
      });
      it('should return a division object with the correct abbreviation', () => {
        expect(Teams.toDivision(mockApiData).abbreviation).toBe(mockApiData.abbreviation);
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
          name: 'Gummy Bears',
        },
        conference: {
          name: 'Wild West',
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
        const team = await Teams.toTeam(mockApiData, false);
        expect(team).toMatchSnapshot();
      });
    });
    describe('parseData', () => {
      describe('when no data is passed', () => {
        it('handles the error', () => {
          const team = new Teams(1).parseData(null);
          expect(team).not.toBeNull();
        });
      });
    });
  });
});
