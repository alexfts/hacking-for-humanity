const styles = theme => ({
  root: {
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
  title: {
    textAlign: 'center',
    color: theme.palette.primary.dark
  },
  factContainer: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
  },
  fact: {
    width: '50%',
    margin: '20px auto'
  },

  header: {
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
