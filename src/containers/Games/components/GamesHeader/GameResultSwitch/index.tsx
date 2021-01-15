import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { getShowScoreGames } from 'common/selectors/Games/gamesList';
import { showScoreGameAction } from 'containers/Games/store/actions';

const GameResultSwitch = ({ styles }) => {
  const dispatch = useDispatch();

  const showScore = useSelector(getShowScoreGames);

  const handleChangeSwitch = () => {
    dispatch(showScoreGameAction(!showScore));
  };

  return (
    <div className={styles.switchWrap}>
      SHOW SCORES{' '}
      <Switch
        className={styles.switch}
        checked={showScore}
        onChange={handleChangeSwitch}
        color="primary"
      />
    </div>
  );
};

export default GameResultSwitch;
