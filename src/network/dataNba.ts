import { TGetBoxScoreRequest } from 'containers/GameStats/store/BoxScore/entities';
import Instance, { TAxios } from 'network/Instance';

class DataNba extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Games
  async getGames(date): TAxios {
    return this.send('get', `/${date}/scoreboard.json`, {});
  }

  async getBoxScore(game: TGetBoxScoreRequest): TAxios {
    const { gameDate, gameId } = game;

    return this.send('get', `/${gameDate}/${gameId}_boxscore.json`, {});
  }

  // Standings
  async getStandings(params): TAxios {
    return this.send('get', `/current/${params}.json`, {});
  }
}

// "teamRoster": "/prod/v1/2020/teams/{{teamUrlCode}}/roster.json", // respone playerID

// stats.nba
// https://stats.nba.com/js/data/widgets/home_season.json - season stats
// https://stats.nba.com/js/data/widgets/home_daily.json - daily stats

// https://stats.nba.com/js/data/playermovement/NBA_Player_Movement.json - trade

const baseUrl = 'https://data.nba.net/prod/v1';
const network = new DataNba(baseUrl);

export default network;
