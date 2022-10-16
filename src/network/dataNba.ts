import { TGetDataRequest } from 'types';
import Instance, { TAxios } from 'network/Instance';
import { CURRENT_SEASON_YEAR } from 'common/constants/currentSeason';

class DataNba extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  // Games
  async getGames(date): TAxios {
    return this.send('get', `/prod/v1/${date}/scoreboard.json`, {});
  }

  async getBoxScore(game: TGetDataRequest): TAxios {
    const { gameDate, gameId } = game;

    return this.send('get', `/prod/v1/${gameDate}/${gameId}_boxscore.json`, {});
  }

  async getPreviewArticles(game: TGetDataRequest): TAxios {
    const { gameDate, gameId } = game;

    return this.send(
      'get',
      `/prod/v1/${gameDate}/${gameId}_preview_article.json`,
      {},
    );
  }

  async getPlayersPerGame(game: TGetDataRequest): TAxios {
    const { gameDate, gameId } = game;

    return this.send(
      'get',
      `/data/10s/json/cms/${CURRENT_SEASON_YEAR}/game/${gameDate}/${gameId}/playersPerGame.json`,
      {},
    );
  }

  // Standings
  async getStandings(params): TAxios {
    return this.send('get', `/prod/v1/current/${params}.json`, {});
  }

  // Teams schedule
  async getScheduleTeam(params): TAxios {
    return this.send(
      'get',
      `/prod/v1/${CURRENT_SEASON_YEAR}/teams/${params}/schedule.json`,
      {},
    );
  }
}

// "today.json" http://data.nba.net/10s/prod/v1/today.json
// "teamRoster": "/prod/v1/2020/teams/{{teamUrlCode}}/roster.json", // respone playerID
// "playerProfile": http://data.nba.net/prod/v1/2020/players/1630173_profile.json

const baseUrl = 'https://data.nba.net';
const network = new DataNba(baseUrl);

export default network;
