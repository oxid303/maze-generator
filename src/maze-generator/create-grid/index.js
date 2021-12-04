import { X_NUM } from '../constants';

const createGrid = ({ x, y }) => {

  const grid = new Set();

  for (let v = 1; v < y; v += 2) {
    for (let h = 1; h < x; h += 2) {

      grid.add(h * X_NUM + v);
    }
  }

  return grid;
};

export default createGrid;