const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontWeight: 700
  },
  factContainer: {
    color: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'url(/compostbackground.png) no-repeat',
    backgroundSize: 'cover'
  },
  correctFactContainer: {
    color: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)) no-repeat',
    backgroundSize: 'cover'
  },
  header: { color: '#fff', fontWeight: 700 },
  fact: {
    width: '50%',
    // margin: '20px auto',
    color: '#fff'
  },
  img: {
    width: '10%'
  }
});

export default styles;
