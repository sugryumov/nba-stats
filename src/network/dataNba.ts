import Instance, { TAxios } from 'network/Instance';

class DataNba extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Games
  async getGames(date): TAxios {
    return this.send('get', `/${date}/scoreboard.json`, {});
  }
}

const baseUrl = 'http://data.nba.net/prod/v1';
const network = new DataNba(baseUrl);

export default network;
