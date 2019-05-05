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
    width: '100%',

    position: 'relative'
  },
  label: { color: theme.palette.primary.contrastText, textAlign: 'center' },
  mobileStepper: {
    position: 'absolute',
    background: 'transparent',
    bottom: 0,
    width: '100%'
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  buttonEnd: {
    color: '#fff'
  }
});

export default styles;
