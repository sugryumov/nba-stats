import React from 'react';
import { useDispatch } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import Cancel from '@material-ui/icons/Cancel';
import { colors } from 'theme';
import { selectedPlayerAction } from 'containers/PlayerStatistics/store/SearchPlayer/actions';
import { useStyles } from './styles';

const ChangedPlayerChip = ({ selectedPlayers }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const renderChips = selectedPlayers.map((option, index) => {
    const { id, first_name, last_name } = option;
    const color = colors[index % colors.length];

    const onDeleteHandler = () => {
      dispatch(
        selectedPlayerAction(
          selectedPlayers.filter(player => player !== option),
        ),
      );
    };

    return (
      <Chip
        key={id}
        variant="outlined"
        className={classes.chip}
        style={{ color, borderColor: color }}
        label={`${first_name} ${last_name} `}
        deleteIcon={<Cancel style={{ color }} />}
        onDelete={onDeleteHandler}
      />
    );
  });

  return <div className={classes.root}>{renderChips}</div>;
};

export default ChangedPlayerChip;
