import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constantnts';

const drawerWidth = DRAWER_WIDTH;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      height: '100vh',
    },
    drawerPaper: {
      width: drawerWidth,
      display: 'flex',
      alignItems: 'center',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      height: 'calc(100vh - 64px)',
      flexGrow: 1,
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    container: {
      width: '90%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttons: {
      width: '100%',
      display: 'grid',
      justifyItems: 'center',
      gap: '1rem',
    },
    button: {
      width: '50%',
    },
  });

export default styles;
