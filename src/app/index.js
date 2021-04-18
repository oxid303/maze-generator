import React from 'react';
import Header from './header';
import Maze from './maze';
import LS from '../utils/local-storage';
import generateMaze from '../maze-generator';
import { SIZE_MIN, SIZE_MAX } from '../maze-generator/constants';

const App = () => {

  let [maze, setMaze] = React.useState(null);
  let [mazeParams, setMazeParams] = React.useState(null);
  let [isShowPath, setIsShowPath] = React.useState(false);
  let [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initParams = LS.getMazeParams();
    setMazeParams(initParams);
    setMaze(generateMaze(initParams));

    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const updateMaze = params => {
    setLoading(true);
    setIsShowPath(false);
    setMaze(null);

    setTimeout(() => {
      setMaze(generateMaze(params));

      setTimeout(() => {
        setLoading(false);
      });
    });
  };

  const updateMazeParams = params => {
    LS.setMazeParams(params);
    setMazeParams(params);
  };

  const updateSize = size => {
    if (size < SIZE_MIN || size > SIZE_MAX) return;
    updateMazeParams({ ...mazeParams, size });
  };

  const toggleIsShowPath = () => {
    setIsShowPath(!isShowPath);
  };

  return (
    <div>
      <Header
        mazeParams={mazeParams}
        updateMaze={updateMaze}
        updateMazeParams={updateMazeParams}
        updateSize={updateSize}
        isShowPath={isShowPath}
        toggleIsShowPath={toggleIsShowPath}
        loading={loading}
      />
      <Maze
        maze={maze}
        mazeParams={mazeParams}
        isShowPath={isShowPath}
      />
    </div>
  )
};

export default App;