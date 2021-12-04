import React from 'react';
import Path from './path';
import Ways from './ways';
import styles from '../../styles';

const Maze = ({ maze, mazeParams, isShowPath }) => {

  return (
    <>
      {maze && <div style={styles.mazeWrapper}>
        <div style={styles.mazeContainer}>
          <Ways ways={maze.ways} mazeParams={mazeParams} />

          <div style={styles.isShowPath(isShowPath)}>
            <Path path={maze.path} mazeParams={mazeParams} />
          </div>
        </div>
      </div>}
    </>
  );
};

export default Maze;