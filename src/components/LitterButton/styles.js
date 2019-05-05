const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.45
      },
      '& $imageTitle': {
        display: 'flex',
        border: '4px solid currentColor',
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    display: 'none',
    position: 'relative',
    fontWeight: 700
  }
});

export default styles;
