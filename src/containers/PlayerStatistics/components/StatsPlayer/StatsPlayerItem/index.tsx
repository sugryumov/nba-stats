import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { colors } from 'helpers/theme';
import './index.css';

const StatsPlayerItem = ({ playerFullInfo }) => {
  const renderTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>GP</TableCell>
          <TableCell>MIN</TableCell>
          <TableCell>FGM</TableCell>
          <TableCell>FGA</TableCell>
          <TableCell>FG%</TableCell>
          <TableCell>FG3M</TableCell>
          <TableCell>FG3A</TableCell>
          <TableCell>FG3%</TableCell>
          <TableCell>FTM</TableCell>
          <TableCell>FTA</TableCell>
          <TableCell>FT%</TableCell>
          <TableCell>OREB</TableCell>
          <TableCell>DREB</TableCell>
          <TableCell>REB</TableCell>
          <TableCell>AST</TableCell>
          <TableCell>STL</TableCell>
          <TableCell>BLK</TableCell>
          <TableCell>TO</TableCell>
          <TableCell>PF</TableCell>
          <TableCell>PTS</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const renderTableBody = info => {
    const {
      games_played,
      min,
      fgm,
      fga,
      fg_pct,
      fg3m,
      fg3a,
      fg3_pct,
      ftm,
      fta,
      ft_pct,
      oreb,
      dreb,
      reb,
      ast,
      stl,
      blk,
      turnover,
      pf,
      pts,
    } = info;
    return (
      <TableBody>
        <TableRow>
          <TableCell>{games_played ? games_played : '-'}</TableCell>
          <TableCell>{min ? min : '-'}</TableCell>
          <TableCell>{fgm ? fgm : '-'}</TableCell>
          <TableCell>{fga ? fga : '-'}</TableCell>
          <TableCell>{fg_pct ? fg_pct : '-'}</TableCell>
          <TableCell>{fg3m ? fg3m : '-'}</TableCell>
          <TableCell>{fg3a ? fg3a : '-'}</TableCell>
          <TableCell>{fg3_pct ? fg3_pct : '-'}</TableCell>
          <TableCell>{ftm ? ftm : '-'}</TableCell>
          <TableCell>{fta ? fta : '-'}</TableCell>
          <TableCell>{ft_pct ? ft_pct : '-'}</TableCell>
          <TableCell>{oreb ? oreb : '-'}</TableCell>
          <TableCell>{dreb ? dreb : '-'}</TableCell>
          <TableCell>{reb ? reb : '-'}</TableCell>
          <TableCell>{ast ? ast : '-'}</TableCell>
          <TableCell>{stl ? stl : '-'}</TableCell>
          <TableCell>{blk ? blk : '-'}</TableCell>
          <TableCell>{turnover ? turnover : '-'}</TableCell>
          <TableCell>{pf ? pf : '-'}</TableCell>
          <TableCell>{pts ? pts : '-'}</TableCell>
        </TableRow>
      </TableBody>
    );
  };

  return (
    <>
      {playerFullInfo?.map((info, idx) => {
        const { id, last_name, first_name, position, team } = info;

        return (
          <div
            key={id}
            className="stats-player-item"
            style={{ color: colors[idx % colors.length] }}
          >
            <p className="stats-player-item__full-name">
              {`${first_name} ${last_name} `}
            </p>
            <p className="stats-player-item__info">{`Position: ${
              position ? position : '-'
            } | Team: ${team.abbreviation}`}</p>

            <div className="stats-player-item__table">
              <Table>
                {renderTableHead()}
                {renderTableBody(info)}
              </Table>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(StatsPlayerItem);
