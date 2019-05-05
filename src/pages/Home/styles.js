const styles = theme => ({
  container: {
    flexGrow: 1,
    height: '100%',
    background: theme.palette.primary.light
  },
  item: {
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  }
});

export default styles;
