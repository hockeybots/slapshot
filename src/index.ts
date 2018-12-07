import TeamsEndpoint from './api/Teams';

const Teams = (...ids: Array<number>) => new TeamsEndpoint(...ids);

export default { Teams };
