import React, { createElement } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
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
};

const ReusableTable = ({ columns, data }: ReusableTableProps) => {
  const classes = useStyles();

  return (
    <Table aria-label="caption table">
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell key={column.id} className={classes.headTableCell}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((item, idx) => {
          return (
            <TableRow hover key={`TableRow_${idx}`}>
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
