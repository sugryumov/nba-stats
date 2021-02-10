import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, TextField } from '@material-ui/core';
import debounce from '@material-ui/core/utils/debounce';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  getSearchPlayersData,
  getSearchPlayersLoading,
} from 'common/selectors/PlayerStats/searchPlayers';
import { selectedPlayerAction } from 'pages/PlayerStats/store/SearchPlayer';
import { TPlayer } from 'pages/PlayerStats/store/types';
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

  const delayedSearch = debounce((search: string) => {
    setSearchInputValue(search);
    onFinishSearch(search);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    delayedSearch(value);
  };

  const renderInput = params => {
    return (
      <TextField
        {...params}
        variant="outlined"
        label="SEARCH FOR A PLAYER e.g. LEBRON JAMES"
        onChange={onChangeSearch}
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
