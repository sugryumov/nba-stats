import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ITheme } from 'interfaces/theme';
import { TPlayer } from 'interfaces';
import {
  getSearchPlayersData,
  getSearchPlayersLoading,
} from 'common/selectors/Statistics/searchPlayers';

const useStyles = makeStyles((theme: ITheme) => ({
  search: {
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primaryColor,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primaryColor,
    },
  },
}));

const SearchPlayer = ({
  onFinishSearch,
  changedPlayers,
  setChangedPlayers,
}) => {
  const classes = useStyles();

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
    setChangedPlayers(value);
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
      className={classes.search}
      value={changedPlayers}
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
