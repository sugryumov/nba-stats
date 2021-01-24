import React, { createElement } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './styles';

type ReusableTableProps = {
  data: any;
  columns: TColumns[];
};

type TColumns = {
  id: number;
  component: any;
  name: string;
  render?: string[];
  label: string;
  colSpan?: {
    count: number;
    columnName: string;
  };
  styles?: any;
  tooltip?: string;
};

const ReusableTable = ({ columns, data }: ReusableTableProps) => {
  const classes = useStyles();

  return (
    <Table aria-label="caption table">
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <Tooltip
              key={column.id}
              title={column.tooltip ? column.tooltip : ''}
              aria-label={column.tooltip}
              placement="top"
              enterTouchDelay={0}
            >
              <TableCell
                className={classes.headTableCell}
                style={column.styles ? column.styles : {}}
              >
                {column.label}
              </TableCell>
            </Tooltip>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((item, idx) => {
          return (
            <TableRow hover={data.length > 2} key={`TableRow_${idx}`}>
              {columns.map(column => {
                const render = column.render?.map(el => item[el]);
                const colSpan =
                  column.colSpan?.count && item[column.colSpan.columnName];

                return (
                  <TableCell
                    key={column.id}
                    className={classes.bodyTableCell}
                    colSpan={colSpan && column.colSpan?.count}
                    align={colSpan ? 'left' : 'center'}
                    style={column.styles ? column.styles : {}}
                  >
                    {createElement(column.component, {
                      value: item[column.name],
                      render,
                    })}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ReusableTable;
