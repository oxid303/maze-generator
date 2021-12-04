import React from 'react';
import { POINT_SIZE } from '../../constants';
import styles from '../../../styles';

const Ways = ({ ways, mazeParams }) => {

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

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#263238';
    for (let i = 0; i <= y; ++i) ctx.fillRect(0, i * full, width, size);
    for (let i = 0; i <= x; ++i) ctx.fillRect(i * full, 0, size, height);

    ctx.fillStyle = '#fff';
    for (const { x, y } of ways) {

      ctx.fillRect(
        x % 2 ? x * half - shift : x * half,
        y % 2 ? y * half - shift : y * half,
        x % 2 ? point : size,
        y % 2 ? point : size
      );
    }

  }, [ways, mazeParams]);

  return (
    <canvas ref={ref} style={styles.canvas} />
  );
};

export default Ways;