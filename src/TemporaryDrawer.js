import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  body: {
    backgroundColor: 'white',
    minWidth: 400,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  return (

    <div className={classes.body}>


      <React.Fragment key={'right'}>

        <Drawer onClose={props.close} classes={{ paperAnchorRight: classes.body }} anchor={'right'} open={true}>
          Country Information
        

            <List>
              {props.data.name && Object.keys(props.data).filter((key) => key !== 'flag' && (typeof props.data[key] === 'string' || typeof props.data[key] === 'number')).map((key) =>
                <ListItem button key={props.data[key]}>
                  <Grid item xs={12} sm={6}>
                    <ListItemText primary={key} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ListItemText secondary={props.data[key]} />
                  </Grid>
                </ListItem>
              )}
            </List>
            
        </Drawer>

      </React.Fragment>

    </div>
  );
}