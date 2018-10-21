export default ({spacing, palette, breakpoints}) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    width: '100%',
    height: '100%',
    paddingBottom: spacing.unit * 8,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: spacing.unit,
  },
  submit: {
    marginTop: spacing.unit * 3,
  },
  fab: {
    position: "fixed",
    bottom: spacing.unit * 10,
    right: spacing.unit * 2,
    zIndex: 1000,
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: spacing.unit * 3,
    marginRight: spacing.unit * 3,
    [breakpoints.up(400 + spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${spacing.unit * 2}px ${spacing.unit * 3}px ${spacing.unit * 3}px`,
  },
  playerContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    padding: spacing.unit,
    height: spacing.unit * 8,
    backgroundColor: palette.secondary.main,
  },
  player: {
    backgroundColor: "transparent",
  },
});