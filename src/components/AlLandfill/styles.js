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
    position: 'absolute',
    margin: 'auto',
    top: '40%',
    left: 0,
    right: 0,
    width: '70%',
    textAlign: 'center',
    zIndex: 10
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    textShadow: '2px 3px 5px #353535'
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    position: 'relative',
    height: '100vh',
    width: '100%'
  },

  mobileStepper: {
    background: 'transparent',
    textShadow: '2px 3px 5px #353535',
    position: 'absolute',
    bottom: '5%',
    width: '100%'
  },
  stepBtn: {
    color: '#fff',
    textShadow: '1px 1px 2px #353535'
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '40%',
    width: '100%'
  },
  buttonEnd: {
    margin: '0 10px'
  }
});

export default styles;
