import { fixParams, modifyParams } from './maze-params';
import { getRandomFromSet, getVectors, transformSetToArr } from './utils';
import createExits from './create-exits';
import createShape from './create-shape';
import stepper from './stepper';

const mazeGenerator = params => {

  params = fixParams(params);
  params = modifyParams(params);

  const exits = createExits(params);
  const shape = createShape(params);
  const ways = new Set();
  const path = new Set();

  const start = getRandomFromSet(shape);
  shape.delete(start);

  const steps = [];

  steps.push({
    curr: start,
    vectors: getVectors(),
  });

  while (shape.size || exits.size) {
    stepper(shape, ways, exits, path, steps);
  }

  return {
    ways: transformSetToArr(ways),
    path: transformSetToArr(path),
  };
};

export default mazeGenerator;