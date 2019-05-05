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
  label: {
    color: '#fff',
    textAlign: 'center'
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    position: 'relative',
    height: '100%',
    width: '100%'
  },

  mobileStepper: {
    // background: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    bottom: '5%',
    width: '100%'
  },
  stepBtn: {
    color: '#fff'
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
