import People from '../People';
import { Player } from '../types';

describe('Api', () => {
  describe('People', () => {
    describe('toPlayer', () => {
      const mockApiData = {
        currentAge: 22,
        birthDate: '1990-01-01',
        birthCity: 'City of Angels',
        birthStateProvince: 'CA',
        birthCountry: 'USA',
        shootsCatches: 'R',
        firstName: 'Cool',
        fullName: 'Cool Guy',
        height: '6\' 5"',
        id: 1,
        alternateCaptain: false,
        captain: true,
        rookie: false,
        primaryNumber: '99',
        lastName: 'Guy',
        primaryPosition: {
          name: 'Goalie',
        },
        rosterStatus: 'A',
        weight: 222,
      };
      it('should return a player object with the correct data', async () => {
        const player = await People.toPlayer(mockApiData);
        expect(player).toMatchSnapshot();
      });
    });
    describe('parseData', () => {
      describe('when data IS NOT passed', () => {
        it('handles the error', () => {
          const player = new People(1);
          expect(player.parseData<Player>(null, 'people', People.toPlayer)).rejects.toBe(
            'Unable to parse, missing data',
          );
        });
      });
      describe('when data IS passed', () => {
        it('returns an array of Player objects', () => {
          const player = new People(1);
          const mockApiData = {
            copyright:
              'NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.',
            people: [
              {
                id: 8468011,
                fullName: 'Ryan Miller',
                link: '/api/v1/people/8468011',
                firstName: 'Ryan',
                lastName: 'Miller',
                primaryNumber: '30',
                birthDate: '1980-07-17',
                currentAge: 38,
                birthCity: 'East Lansing',
                birthStateProvince: 'MI',
                birthCountry: 'USA',
                nationality: 'USA',
                height: '6\' 2"',
                weight: 168,
                active: true,
                alternateCaptain: false,
                captain: false,
                rookie: false,
                shootsCatches: 'L',
                rosterStatus: 'I',
                currentTeam: {
                  id: 24,
                  name: 'Anaheim Ducks',
                  link: '/api/v1/teams/24',
                },
                primaryPosition: {
                  code: 'G',
                  name: 'Goalie',
                  type: 'Goalie',
                  abbreviation: 'G',
                },
              },
            ],
          };

          const expectedOutput: Array<Player> = [
            {
              age: 38,
              birthDate: new Date('1980-07-17'),
              birthplace: 'East Lansing, MI USA',
              dominantSide: 'L',
              firstName: 'Ryan',
              fullName: 'Ryan Miller',
              height: '6\' 2"',
              id: 8468011,
              isAlternateCaptain: false,
              isCaptain: false,
              isRookie: false,
              jerseyNumber: '30',
              lastName: 'Miller',
              position: 'Goalie',
              rosterStatus: 'I',
              weight: 168,
            },
          ];

          expect(player.parseData<Player>(mockApiData, 'people', People.toPlayer)).resolves.toEqual(expectedOutput);
        });
      });
    });
  });
});
