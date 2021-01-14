import Instance, { TAxios } from 'network/Instance';

class Network extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Statistics
  async searchPlayers(params): TAxios {
    return this.send('get', `/players`, { params });
  }

  async seasonAverages(params): TAxios {
    return this.send('get', `/season_averages`, { params });
  }
}

const baseUrl = 'https://www.balldontlie.io/api/v1';
const network = new Network(baseUrl);

export default network;
