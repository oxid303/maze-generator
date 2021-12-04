import { fixParams, modifyParams } from './maze-params';
import { getRandomFromArr, getVectors, transformSetToArr } from './utils';
import createExits from './create-exits';
import createGrid from './create-grid';
import stepper from './stepper';

const mazeGenerator = params => {

  params = fixParams(params);
  params = modifyParams(params);

  const grid = createGrid(params);
  const exits = createExits(params);
  const ways = new Set();
  const path = new Set();

  const first = getRandomFromArr([...grid]);
  grid.delete(first);

  const steps = [{
    curr: first,
    vectors: getVectors(),
  }];

  while (grid.size || exits.size) {
    stepper(grid, exits, ways, path, steps);
  }

  return {
    ways: transformSetToArr(ways),
    path: transformSetToArr(path),
  };
};

export default mazeGenerator;