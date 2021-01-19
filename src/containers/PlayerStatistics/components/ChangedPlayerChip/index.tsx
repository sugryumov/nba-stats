import React from 'react';
import Chip from '@material-ui/core/Chip';
import Cancel from '@material-ui/icons/Cancel';
import { colors } from 'theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chip: {
    margin: '0 10px 10px 0',
  },
  wrapper: {
    margin: '20px 0',
  },
});

const ChangedPlayerChip = ({ changedPlayers, setChangedPlayers }) => {
  const classes = useStyles();

  const renderChips = changedPlayers.map((option, index) => {
    const { id, first_name, last_name } = option;
    const color = colors[index % colors.length];

    const onDeleteHandler = () => {
      setChangedPlayers(changedPlayers.filter(player => player !== option));
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
        onClick={onDeleteHandler}
      />
    );
  });

  return <div className={classes.wrapper}>{renderChips}</div>;
};

export default ChangedPlayerChip;
