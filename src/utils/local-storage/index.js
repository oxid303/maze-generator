import isValidJSON from '../is-valid-json';
import { fixParams } from '../../maze-generator/maze-params';

const MAZE_PARAMS = 'maze-params';
const MENU_PARAMS = 'menu-params';

const getParams = key => {
  const paramsJSON = localStorage[key];
  let params;

  if (isValidJSON(paramsJSON)) {
    params = JSON.parse(paramsJSON);
  }

  params = fixParams(params);
  localStorage[key] = JSON.stringify(params);
  return params;
};

const setParams = (key, params) => {
  localStorage[key] = JSON.stringify(params);
};

const LS = {
  getMazeParams() {
    return getParams(MAZE_PARAMS);
  },
  setMazeParams(params) {
    setParams(MAZE_PARAMS, params);
  },

  getMenuParams() {
    return getParams(MENU_PARAMS);
  },
  setMenuParams(params) {
    setParams(MENU_PARAMS, params);
  },
};

export default LS;