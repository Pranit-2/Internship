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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  body: {
    backgroundColor: 'white',
    minWidth: 400,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  
  return (

    <div className={classes.body}>

      <React.Fragment key={'right'}>

        <Drawer onClose={props.close} classes={{ paperAnchorRight: classes.body }} anchor={'right'} open={true}>

          <List>
            {props.data.name && Object.keys(props.data).filter((key) => ['capital', 'name', 'population', 'region'].includes(key)).map((key) =>
              <ListItem button key={props.data[key]}>
                <ListItemText primary={`${key} : ${props.data[key]}`} />

              </ListItem>
            )}
          </List>

        </Drawer>
      </React.Fragment>

    </div>
  );
}