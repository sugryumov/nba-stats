import { TGetDataRequest } from 'interfaces';
import Instance, { TAxios } from 'network/Instance';

class DataNba extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Games
  async getGames(date): TAxios {
    return this.send('get', `/${date}/scoreboard.json`, {});
  }

  async getBoxScore(game: TGetDataRequest): TAxios {
    const { gameDate, gameId } = game;

    return this.send('get', `/${gameDate}/${gameId}_boxscore.json`, {});
  }

  async getGamePreview(game: TGetDataRequest): TAxios {
    const { gameDate, gameId } = game;

    return this.send('get', `/${gameDate}/${gameId}_preview_article.json`, {});
  }

  // Standings
  async getStandings(params): TAxios {
    return this.send('get', `/current/${params}.json`, {});
  }
}

// "teamRoster": "/prod/v1/2020/teams/{{teamUrlCode}}/roster.json", // respone playerID

// "playerProfile": http://data.nba.net/prod/v1/2020/players/1630173_profile.json

// http://data.nba.net/data/10s/json/cms/2020/game/20210122/0022000230/playersPerGame.json - prewiew game roster
// http://data.nba.net/prod/v1/20210126/0022000269_preview_article.json - prewiew game news

// stats.nba
// https://stats.nba.com/js/data/widgets/home_season.json - season stats
// https://stats.nba.com/js/data/widgets/home_daily.json - daily stats

// https://stats.nba.com/js/data/playermovement/NBA_Player_Movement.json - trade

const baseUrl = 'https://data.nba.net/prod/v1';
const network = new DataNba(baseUrl);

export default network;
