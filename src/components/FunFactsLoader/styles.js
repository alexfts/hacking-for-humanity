const styles = theme => ({
root: {
    flexGrow: 1,
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
svg: {
  fontSize: "20px !important"
}

});
export default styles;