import { TStatsGroupBy } from 'pages/Stats/store/types';
import Instance, { TAxios } from 'network/Instance';

class StatsNba extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Standings
  async getStats(params: TStatsGroupBy): TAxios {
    return this.send('get', `/js/data/widgets/${params}.json`, {});
  }

  // Playoff
  async getPlayoffBracket(): TAxios {
    return this.send(
      'get',
      `stats/playoffbracket?LeagueID=00&SeasonYear=2020&State=2`,
      {},
    );
  }
}

// stats.nba
// https://stats.nba.com/js/data/widgets/home_season.json - season stats
// https://stats.nba.com/js/data/widgets/home_daily.json - daily stats

// https://stats.nba.com/js/data/playermovement/NBA_Player_Movement.json - trade

const baseUrl = 'https://stats.nba.com';

const network = new StatsNba(baseUrl);

export default network;
