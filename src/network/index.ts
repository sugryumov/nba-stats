import Instance, { TAxios } from 'network/Instance';

class Network extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Games
  async fetchGamesResult(params): TAxios {
    return this.send('get', `/games`, { params });
  }

  // Statystics
  async searchPlayers(params): TAxios {
    return this.send('get', `/players`, { params });
  }

  // Statystics
  async seasonAverages(params): TAxios {
    return this.send('get', `/season_averages`, { params });
  }
}

// const { REACT_APP_BACKEND_URL } = process.env;
// const baseUrl = REACT_APP_BACKEND_URL || window.location.origin;
const baseUrl = 'https://www.balldontlie.io/api/v1';
const network = new Network(baseUrl);

export default network;
