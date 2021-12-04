import { X_NUM } from '../constants';

export const getVectors = vector =>
  [-1, X_NUM, 1, -X_NUM].filter(v => v !== -vector);

const random = Math.random;
export const getRandomFromArr = arr => arr[~~(random() * arr.length)];

export const transformSetToArr = set => {
  const arr = [];
  set.forEach(point => arr.push({ x: ~~(point / X_NUM), y: point % X_NUM }));
  return arr;
};