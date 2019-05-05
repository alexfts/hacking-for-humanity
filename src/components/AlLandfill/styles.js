const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%'
  },
  header: {
    // backgroundColor: theme.palette.background.default,
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'transparent',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    // paddingLeft: theme.spacing.unit * 4,
    position: 'absolute',
    margin: 'auto',
    top: '50%',
    left: 0,
    right: 0,
    width: '80%',
    textAlign: 'center',
    zIndex: 10
  },

  img: {
    overflow: 'hidden',
    display: 'block',
    height: '100%',
    width: '100%',

    position: 'relative'
  },
  label: {
    color: '#fff',
    textAlign: 'center'
  },
  mobileStepper: {
    background: 'transparent',
    fontSize: '5rem',
    position: 'absolute',
    bottom: '5%',
    width: '100%'
  },

  buttonContainer: {
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonEnd: {
    color: '#fff'
  }
});

export default styles;
