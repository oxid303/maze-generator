import { NUM } from '../constants';

const createShape = ({ x, y }) => {

  const shape = new Set();

  for (let v = 1; v < y; v += 2) {
    for (let h = 1; h < x; h += 2) {

      shape.add(h * NUM + v);
    }
  }

  return shape;
};

export default createShape;