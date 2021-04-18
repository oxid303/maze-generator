import { NUM } from '../constants';

const createExits = ({ x, y, start, sMin, sMax, finish, fMin, fMax }) => {

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 2) / 2) * 2 + min;
  };

  const getExit = [
    (min, max) => getRandom(min, max) * NUM,
    (min, max) => (x - 1) * NUM + getRandom(min, max),
    (min, max) => getRandom(min, max) * NUM + y - 1,
    (min, max) => getRandom(min, max),
  ];

  const getFinish = prev => {
    const curr = getExit[finish](fMin, fMax);

    if (curr === prev) {
      return getFinish(prev);

    } else return curr;
  };

  const exits = new Set();

  const first = getExit[start](sMin, sMax);
  exits.add(first);
  exits.add(getFinish(first));

  return exits;
};

export default createExits;