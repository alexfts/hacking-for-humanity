const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%'
  },
  header: {
    backgroundColor: 'transparent',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    position: 'absolute',
    margin: 'auto',
    top: '40%',
    left: 0,
    right: 0,
    width: '60%',
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
    margin: 'auto',
    left: 0,
    right: 0,
    bottom: '5%',
    width: '80%',
    padding: theme.spacing.unit * 5
  },
  stepBtn: {
    color: '#fff',
    fontWeight: 700
    // textShadow: '1px 1px 2px #353535'
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '33%',
    width: '100%'
  },
  buttonEnd: {
    margin: theme.spacing.unit,
    fontWeight: 700
  }
});

export default styles;
