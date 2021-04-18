const styles = {
  mazeWrapper: {
    position: 'absolute',
    overflow: 'auto',
    top: 64,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  canvas: {
    display: 'block',
    outline: 0,
    padding: 20,
  },
  isShowPath: isShowPath => ({
    visibility: isShowPath ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
  }),
  isShowMenu: isShow => ({
    visibility: isShow ? 'visible' : 'hidden',
    position: 'absolute',
    marginTop: isShow ? 5 : 15,
    marginLeft: -72,
    padding: 10,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
    boxShadow: '0 0 5px #777',
    opacity: isShow ? 1 : 0,
    transition: '0.2s',
    zIndex: isShow ? 2 : -1,
    overflow: 'auto',
  }),

  appBar: {
    alignItems: 'center',
  },
  menu: {
    width: 150,
    padding: '0 25px',
  },
  simpleSliderInfo: {
    display: 'grid',
    gridTemplateColumns: 'auto 30px 30px',
  },
  rangeSliderInfo: {
    display: 'grid',
    gridTemplateColumns: '43px 64px 77px',
    maxHeight: 30,
  },
  rangeSliderIcon: rotate => ({
    width: 20,
    height: 20,
    transform: `rotate(${rotate * 90}deg)`,
  }),
};

export default styles;