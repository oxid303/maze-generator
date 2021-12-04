import { X_NUM } from '../constants';

const createExits = ({ x, y, start, sMin, sMax, finish, fMin, fMax }) => {

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 2) / 2) * 2 + min;
  };

  const getExit = [
    (min, max) => getRandom(min, max) * X_NUM,
    (min, max) => (x - 1) * X_NUM + getRandom(min, max),
    (min, max) => getRandom(min, max) * X_NUM + y - 1,
    (min, max) => getRandom(min, max),
  ];

  const getFinish = prev => {
    const curr = getExit[finish](fMin, fMax);
    return curr === prev ? getFinish(prev) : curr;
  };

  const exits = new Set();

  const first = getExit[start](sMin, sMax);
  exits.add(first);
  exits.add(getFinish(first));

  return exits;
};

export default createExits;