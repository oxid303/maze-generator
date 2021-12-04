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
    const shift = half - size;
    const width = x * full + size;
    const height = y * full + size;

    const canv = ref.current;
    const ctx = canv.getContext('2d');
    canv.width = width;
    canv.height = height;

    ctx.fillStyle = '#e91e63';
    for (const { x, y } of path) {

      ctx.fillRect(
        x % 2 ? x * half : x * half - shift,
        y % 2 ? y * half : y * half - shift,
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