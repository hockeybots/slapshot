import Conferences from '../Conferences';

describe('Api', () => {
  describe('Conferences', () => {
    describe('uri', () => {
      describe('when requesting one conference', () => {
        const conference = new Conferences(1);

        it('should return the correct uri', () => {
          expect(conference.uri).toBe('https://statsapi.web.nhl.com/api/v1/conferences?conferenceId=1');
        });
      });
      describe('when requesting multiple conferences', () => {
        const conference = new Conferences(1, 2);

        it('should return the correct uri', () => {
          expect(conference.uri).toBe('https://statsapi.web.nhl.com/api/v1/conferences?conferenceId=1,2');
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
        it('should return a conference object with the correct data', async () => {
          const conference = await Conferences.toConference(mockApiData);
          expect(conference).toMatchSnapshot();
        });
      });
    });
  });
});
