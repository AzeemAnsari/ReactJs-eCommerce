import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  desc: {
    '& h1': {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.43',
      letterSpacing: '0.01071em',
      '& strong': {
        fontWeight: '400',
      },
    },
  },
}));
