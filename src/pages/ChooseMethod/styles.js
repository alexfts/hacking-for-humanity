const styles = theme => ({
  method: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: '2rem',
    paddingTop: 30,
    paddingBottom: 30
  },

  choices: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    height: '100%',
    width: '100%'
  },
  card: {
    maxWidth: 500,
    width: 250
  },
  media: {
    height: 200
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
