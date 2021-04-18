import { NUM } from '../constants';

export const getVectors = vector =>
  [-1, NUM, 1, -NUM].filter(v => v !== -vector);

export const getRandomFromSet = set => {
  const arr = Array.from(set);
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export const transformSetToArr = set => {
  const result = [];

  for (const point of set.keys()) {
    result.push({
      x: ~~(point / NUM),
      y: point % NUM,
    });
  }
  return result;
};