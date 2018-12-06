import { genEndpoint } from '../';

describe('Endpoints', () => {
  describe('genEndpoint', () => {
    it('should return a properly formatted endpoint', () => {
      const path = 'teams';
      const endPoint = genEndpoint(path);
      expect(endPoint).toBe('https://statsapi.web.nhl.com/api/v1/teams');
    });
  });
});
