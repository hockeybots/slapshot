import Teams from '../Teams';

describe('Api', () => {
  describe('Teams', () => {
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
            `https://statsapi.web.nhl.com/api/v1/teams
            ?teamId=1&expand=team.roster&expand=team.stats&expand=team.schedule.previous&expand=team.schedule.next`,
          );
        });
      });
    });
  });
});
