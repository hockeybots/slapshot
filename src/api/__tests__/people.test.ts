import People from '../People';

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
  });
});
