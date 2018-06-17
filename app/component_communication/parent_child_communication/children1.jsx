import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { TableBody } from '@material-ui/core';
import { TableRow, Paper } from 'material-ui';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

  Children1.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
/**
 * Stateless component 
*/  
function Children1(props) {
    const { classes } = props;
    return(
        <div>
        <Paper className={classes.root}>
            <Table className={classes.root}>
                <TableBody>
                    {props.items.map(function (item, i) {
                        return(
                            <TableRow key={i}>{item}</TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
        </div>
    );
}

export default withStyles(styles)(Children1);
