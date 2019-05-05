const styles = theme => ({
  landfill: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    color: '#fff',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    paddingTop: theme.spacing.unit * 5
  }
});

export default styles;
