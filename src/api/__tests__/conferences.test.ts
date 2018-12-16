import Conferences from '../Conferences';
import { Conference } from '../types';

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
    describe('parseData', () => {
      describe('when data IS NOT passed', () => {
        it('handles the error', () => {
          const player = new Conferences(1);
          expect(player.parseData<Conference>(null, 'people', Conferences.toConference)).rejects.toBe(
            'Unable to parse, missing data',
          );
        });
      });
      describe('when data IS passed', () => {
        it('returns an array of Player objects', () => {
          const player = new Conferences(1);
          const mockApiData = {
            copyright:
              'NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.',
            conferences: [
              {
                id: 1,
                name: 'Eastern',
                link: '/api/v1/conferences/1',
                abbreviation: 'XVE',
                shortName: 'East',
                active: false,
              },
            ],
          };

          const expectedOutput: Array<Conference> = [
            {
              abbreviation: 'XVE',
              active: false,
              id: 1,
              name: 'Eastern',
              shortName: 'East',
            },
          ];

          expect(player.parseData<Conference>(mockApiData, 'conferences', Conferences.toConference)).resolves.toEqual(
            expectedOutput,
          );
        });
      });
    });
  });
});
