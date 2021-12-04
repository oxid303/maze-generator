import {
  XY_MIN, XY_MAX, SIZE_MIN, SIZE_MAX, EXIT_MIN, EXIT_MAX, SF_MIN
} from '../constants';

export const initParams = {
  x: 20,
  y: 20,
  size: 3,
  start: 3,
  sMin: 0,
  sMax: 0,
  finish: 1,
  fMin: 0,
  fMax: 0,
};

const modifyUp = num => num * 2 + 1;
const modifyDown = num => num * 2 - 1;

export const modifyParams = params => ({
  ...params,
  x: modifyUp(params.x),
  y: modifyUp(params.y),
  sMin: modifyDown(params.sMin),
  sMax: modifyDown(params.sMax),
  fMin: modifyDown(params.fMin),
  fMax: modifyDown(params.fMax),
});

export const getLine = (vector, x, y) => !(vector % 2) ? x : y;

export const resetMinMax = params => ({
  ...params,
  sMin: SF_MIN,
  fMin: SF_MIN,
  sMax: getLine(params.start, params.x, params.y),
  fMax: getLine(params.finish, params.x, params.y),
});

const fixParam = (param, min, max, value) => {
  return (param < min || param > max) ? value : param;
};

export const fixParams = params => {
  if (!(params instanceof Object)) params = {};

  let { x, y, size, start, sMin, sMax, finish, fMin, fMax } = params;
  params = { x, y, size, start, sMin, sMax, finish, fMin, fMax };

  for (const key in params) {
    if (!Number.isInteger(params[key])) params[key] = initParams[key];
  }

  ({ x, y, size, start, sMin, sMax, finish, fMin, fMax } = params);

  x = fixParam(x, XY_MIN, XY_MAX, initParams.x);
  y = fixParam(y, XY_MIN, XY_MAX, initParams.y);
  size = fixParam(size, SIZE_MIN, SIZE_MAX, initParams.size);
  start = fixParam(start, EXIT_MIN, EXIT_MAX, initParams.start);
  finish = fixParam(finish, EXIT_MIN, EXIT_MAX, initParams.finish);

  const sLine = getLine(start, x, y);
  sMax = fixParam(sMax, SF_MIN, sLine, sLine);
  sMin = fixParam(sMin, SF_MIN, sMax, SF_MIN);

  const fLine = getLine(finish, x, y);
  fMax = fixParam(fMax, SF_MIN, fLine, fLine);
  fMin = fixParam(fMin, SF_MIN, fMax, SF_MIN);

  if (start === finish && sMin === sMax && sMin === fMin && fMin === fMax) {
    fMax === fLine ? --fMin : ++fMax;
  }

  return { x, y, size, start, sMin, sMax, finish, fMin, fMax };
};