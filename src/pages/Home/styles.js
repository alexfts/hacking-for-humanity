const styles = theme => ({
  container: {
    flexGrow: 1,
    height: '100%',
    background: theme.palette.primary.light
  },
  item: {
    padding: theme.spacing.unit * 5,
    width: '100%',
    maxWidth: 500,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  },
  headline: {
    weight: 700
  },
  script: {
    width: 100,
    height: 300,
    background: 'black',
    margin: 5,
    willChange: 'transform'
  }
});

export default styles;
