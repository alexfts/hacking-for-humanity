const styles = theme => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default styles;
