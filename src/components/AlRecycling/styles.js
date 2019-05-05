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
    textAlign: "center", 
    color: theme.palette.primary.dark
  },
  factContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center"
  },
  fact: {
    width: "50%",
    margin: "20px auto",
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
