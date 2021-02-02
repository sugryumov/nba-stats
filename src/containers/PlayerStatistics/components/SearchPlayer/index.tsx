import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TPlayer } from 'interfaces';
import {
  getSearchPlayersData,
  getSearchPlayersLoading,
} from 'common/selectors/PlayerStatistics/searchPlayers';
import { selectedPlayerAction } from 'containers/PlayerStatistics/store/SearchPlayer/actions';
import { useStyles } from './styles';

const SearchPlayer = ({ onFinishSearch, selectedPlayers }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [openOptionsList, setOpenOptionsList] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [options, setOptions] = useState<TPlayer[]>([]);

  const playerData = useSelector(getSearchPlayersData);
  const playerLoading = useSelector(getSearchPlayersLoading);

  useEffect(() => {
    setOptions(playerData);
  }, [setOptions, playerData]);

  const searchHandler = event => {
    setSearchInputValue(event.target.value);
    onFinishSearch(event.target.value);
  };

  const onOpenHandler = () => {
    setOpenOptionsList(true);
  };

  const onCloseHandler = () => {
    setOptions([]);
    setSearchInputValue('');
    setOpenOptionsList(false);
  };

  const getOptionLabel = ({ first_name, last_name, team }: TPlayer) =>
    `${first_name} ${last_name}  - ${team.abbreviation}`;

  const getOptionSelected = (option, value) =>
    option.first_name === value.first_name;

  const onChangeHandler = (_, value) => {
    dispatch(selectedPlayerAction(value));
  };

  const renderInput = params => {
    return (
      <TextField
        {...params}
        variant="outlined"
        label="SEARCH FOR A PLAYER e.g. LEBRON JAMES"
        onChange={searchHandler}
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <>
              {playerLoading && <CircularProgress color="inherit" size={20} />}
              {params.InputProps.endAdornment}
            </>
          ),
        }}
      />
    );
  };

  return (
    <Autocomplete
      multiple
      className={classes.root}
      value={selectedPlayers}
      closeIcon={false}
      forcePopupIcon={false}
      open={openOptionsList && searchInputValue.length !== 0}
      onOpen={onOpenHandler}
      onClose={onCloseHandler}
      noOptionsText="Player not found"
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionSelected={getOptionSelected}
      loading={playerLoading}
      onChange={onChangeHandler}
      renderInput={renderInput}
      renderTags={() => null}
    />
  );
};

export default SearchPlayer;
