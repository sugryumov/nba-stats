import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { getGamesListData } from 'common/selectors/gamesList';
import { fetchGamesListAction } from './store/actions';
import { TGameItem } from './store/entities';
import './index.css';
import { TextField } from '@material-ui/core';

function GamesListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchGamesListAction.request({
        dates: [dayjs().tz('America/New_York').format('YYYY-MM-DD')],
      }),
    );
  }, [dispatch]);

  const gamesList = useSelector(getGamesListData);

  const renderContent = () => {
    return gamesList.map(
      ({
        id,
        status,
        home_team,
        home_team_score,
        visitor_team,
        visitor_team_score,
      }: TGameItem) => {
        return (
          <div className="games-list__item" key={id}>
            {home_team.full_name} : {visitor_team.full_name}{' '}
            {status === 'Final'
              ? `${home_team_score} : ${visitor_team_score}`
              : status}
          </div>
        );
      },
    );
  };

  const handlerChangeDate = event => {
    dispatch(
      fetchGamesListAction.request({
        dates: [event.target.value],
      }),
    );
  };

  return (
    <main className="games-list">
      <form noValidate>
        <TextField
          id="date"
          type="date"
          defaultValue={dayjs().tz('America/New_York').format('YYYY-MM-DD')}
          onChange={handlerChangeDate}
        />
      </form>
      <div className="container">{renderContent()}</div>
    </main>
  );
}

export default GamesListContainer;
