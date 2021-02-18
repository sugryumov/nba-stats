import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { fetchScheduleTeam } from 'pages/Standings/store/ScheduleTeam';
import { useStyles } from './styles';

const ScheduleTeamModal = ({
  openModal,
  setOpenModal,
  currentTeamId,
  currentTeamName,
}) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (currentTeamId) {
      dispatch(fetchScheduleTeam(currentTeamId));
    }
  }, [dispatch, currentTeamId]);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">{currentTeamName} schedule</h2>
        <p id="simple-modal-description">{currentTeamId}</p>
      </div>
    </Modal>
  );
};

export default ScheduleTeamModal;
