import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Modal from '@material-ui/core/Modal';
import { GAME_STATUS } from 'common/constants/gameStatus';
import {
  getScheduleTeamData,
  getScheduleTeamError,
  getScheduleTeamLoading,
} from 'common/selectors/Standings/scheduleTeam';
import { fetchScheduleTeam } from 'pages/Standings/store/ScheduleTeam';
import LoadingLayout from 'common/components/LoadingLayout';
import { useStyles } from './styles';
import { nbaTeam } from 'common/components/SVGIcon/interface';
import SVGIcon from 'common/components/SVGIcon';

const ScheduleTeamModal = ({
  openModal,
  setOpenModal,
  currentTeamId,
  currentTeamName,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const scheduleTeamData = useSelector(getScheduleTeamData);
  const scheduleTeamLoading = useSelector(getScheduleTeamLoading);
  const scheduleTeamError = useSelector(getScheduleTeamError);

  useEffect(() => {
    if (currentTeamId) {
      dispatch(fetchScheduleTeam(currentTeamId));
    }
  }, [dispatch, currentTeamId]);

  const closeModal = () => {
    setOpenModal(false);
  };

  const renderContent = () => {
    return scheduleTeamData.map(
      ({ gameId, hTeam, vTeam, gameUrlCode, extendedStatusNum }) => {
        const [gameDate, triCode] = gameUrlCode.split('/');

        const vTeamTriCode = triCode.slice(0, 3);
        const hTeamTriCode = triCode.slice(3);

        const vTeamScore = vTeam.score ? vTeam.score : '-';
        const hTeamScore = hTeam.score ? hTeam.score : '-';

        return (
          <div className={classes.game} key={gameId}>
            <p>{dayjs(gameDate).format('DD MMM. YYYY')}</p>

            <div className={classes.match}>
              <SVGIcon name={nbaTeam[vTeamTriCode]} width={25} height={25} />

              {extendedStatusNum === GAME_STATUS.ppd ? (
                <p className={classes.ppd}>PPD</p>
              ) : (
                <div className={classes.score}>
                  <p>{vTeamScore}</p> : <p>{hTeamScore}</p>
                </div>
              )}

              <p className={classes.hTeam}>
                <SVGIcon name={nbaTeam[hTeamTriCode]} width={25} height={25} />
              </p>
            </div>
          </div>
        );
      },
    );
  };

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
    >
      <div className={classes.paper}>
        <h2 className={classes.title} id="simple-modal-title">
          {currentTeamName} Schedule
        </h2>
        <LoadingLayout
          data={scheduleTeamData}
          loading={scheduleTeamLoading}
          error={scheduleTeamError}
        >
          {renderContent()}
        </LoadingLayout>
      </div>
    </Modal>
  );
};

export default ScheduleTeamModal;
