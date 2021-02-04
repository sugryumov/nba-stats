import { TGetStatsParams } from 'interfaces';
import Instance, { TAxios } from 'network/Instance';

class StatsNba extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Standings
  async getStats(params: TGetStatsParams): TAxios {
    return this.send('get', `/widgets/${params}.json`, {});
  }
}

// stats.nba
// https://stats.nba.com/js/data/widgets/home_season.json - season stats
// https://stats.nba.com/js/data/widgets/home_daily.json - daily stats

// https://stats.nba.com/js/data/playermovement/NBA_Player_Movement.json - trade

const baseUrl =
  'https://cors-anywhere.herokuapp.com/https://stats.nba.com/js/data';

const network = new StatsNba(baseUrl);

export default network;
