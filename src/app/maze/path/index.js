import React from 'react';
import { POINT_SIZE } from '../../constants';
import styles from '../../../styles';

const Path = ({ path, mazeParams }) => {

  const ref = React.useRef();

  React.useEffect(() => {

    const { x, y, size } = mazeParams;
    const point = size * POINT_SIZE;
    const full = point + size;
    const half = full / 2;
    const third = full / 3;
    const width = x * full + size;
    const height = y * full + size;

    const canv = ref.current;
    const ctx = canv.getContext('2d');
    canv.width = width;
    canv.height = height;

    ctx.fillStyle = '#e91e63';
    const length = path.length;

    for (let i = 0; i < length; ++i) {
      const { x, y } = path[i];

      ctx.fillRect(
        x % 2 ? x * half : x * half - third,
        y % 2 ? y * half : y * half - third,
        x % 2 ? size : point,
        y % 2 ? size : point
      );
    }

  }, [path, mazeParams]);

  return (
    <canvas ref={ref} style={styles.canvas} />
  );
};

export default Path;