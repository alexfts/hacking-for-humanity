const styles = theme => ({
  container: {
    flexGrow: 1,
    height: '100%'
  },
  item: {
    padding: theme.spacing.unit * 5,
    width: '100%',
    maxWidth: 525,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 10
    },
    zIndex: 999,
    marginLeft: -40
  },
  headline: {
    weight: 700,
    color: theme.palette.primary.dark,
    fontFamily: 'Sofia, cursive'
  },
  header: {
    weight: 700,
    color: theme.palette.primary.dark,
    fontFamily: 'Sofia, cursive',
    textShadow: '2px 2px #44ffd1'
  },
  card: {
    zIndex: 999
  },
  textField: {
    margin: '10px 0'
  },
  btnContainer: {
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 10
  }
});

export default styles;
