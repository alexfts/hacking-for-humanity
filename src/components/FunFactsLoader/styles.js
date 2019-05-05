const styles = theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
    height: '100vh'
  },
  item: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    margin: theme.spacing.unit * 10
  },
  header: {
    weight: 700,
    color: theme.palette.primary.dark,
    fontFamily: 'Sofia, cursive'
  },
  fact: { maxWidth: 500 },
  svg: {
    fontSize: '30px !important'
  }
});
export default styles;
