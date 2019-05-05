const styles = theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5
  },
  item: {
    padding: theme.spacing.unit * 3
  },
  img: {
    margin: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 500,
    width: 250
  },
  media: {
    height: 150,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: theme.spacing.unit
  },
  choice: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});

export default styles;
