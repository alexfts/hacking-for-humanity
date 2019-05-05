const styles = theme => ({
    root: {
        flexGrow: 1,
      },
    title: {
      textAlign: "center", 
      color: theme.palette.primary.dark
    },
    factContainer: {
      color: "white",
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(https://static1.squarespace.com/static/580914a8b8a79b2b7327e3c7/5bfd856f4fa51a145ccc0678/5bfe0bb71ae6cf28edad6882/1543375810519/Coming+out+of+dirt+Small.jpg)"
    },
    fact: {
      width: "50%",
      margin: "20px auto",
    },
});

export default styles;
