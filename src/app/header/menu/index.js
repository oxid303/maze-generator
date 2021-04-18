import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleSlider from '../simple-slider';
import RangeSlider from '../range-slider';
import { IconStart } from '../../../assets/icons';
import { IconFinish } from '../../../assets/icons';
import LS from '../../../utils/local-storage';
import {
  initParams, getLine, resetMinMax,
} from '../../../maze-generator/maze-params';
import {
  XY_MIN, XY_MAX, SIZE_MIN, SIZE_MAX, SF_MIN,
} from '../../../maze-generator/constants';
import { POINT_SIZE } from '../../constants';
import styles from '../../../styles';

const Menu = ({ updateMaze, updateMazeParams, setIsShowMenu }) => {

  let [menuParams, setMenuParams] = React.useState(initParams);

  React.useEffect(() => {
    setMenuParams(LS.getMenuParams());
  }, []);

  const { x, y, size, start, sMin, sMax, finish, fMin, fMax } = menuParams;

  const updateMazeFromMenu = () => {
    updateMazeParams(menuParams);
    updateMaze(menuParams);
    setIsShowMenu(false);
  };

  const onChange = (params, reset) => {
    params = { ...menuParams, ...params };
    if (reset) params = resetMinMax(params);
    LS.setMenuParams(params);
    setMenuParams(params);
  };

  const fitOnScreen = () => {
    const elem = size * POINT_SIZE + size;
    const { top } = styles.mazeWrapper;
    const paddings = styles.canvas.padding * 2;

    onChange({
      x: Math.floor((window.innerWidth - paddings - size) / elem),
      y: Math.floor((window.innerHeight - paddings - size - top) / elem),
    }, true);
  };

  return (
    <div style={styles.menu}>

      <SimpleSlider text="width" name="x" value={x}
        min={XY_MIN} max={XY_MAX} onChange={onChange} reset />

      <SimpleSlider text="height" name="y" value={y}
        min={XY_MIN} max={XY_MAX} onChange={onChange} reset />

      <SimpleSlider text="size" name="size" value={size}
        min={SIZE_MIN} max={SIZE_MAX} onChange={onChange} />

      <RangeSlider text="start" names={['sMin', 'sMax']} values={[sMin, sMax]}
        min={SF_MIN} max={getLine(start, x, y)} onChange={onChange}
        buttonValue={start} Icon={IconStart} />

      <RangeSlider text="finish" names={['fMin', 'fMax']} values={[fMin, fMax]}
        min={SF_MIN} max={getLine(finish, x, y)} onChange={onChange}
        buttonValue={finish} Icon={IconFinish} />

      <Button color="primary" onClick={fitOnScreen}>fit on screen</Button>

      <Button color="primary" onClick={updateMazeFromMenu}>generate</Button>
    </div>
  );
};

export default Menu;