import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuButton from './menu-button';
import { IconMinus, IconPlus, IconShow, IconHide } from '../../assets/icons';
import styles from '../../styles';

const Header = ({
  mazeParams,
  updateMaze,
  updateMazeParams,
  updateSize,
  isShowPath,
  toggleIsShowPath,
  loading,
}) => {

  return (
    <AppBar style={styles.appBar}>
      <Toolbar>

        <Button
          color="inherit"
          disabled={loading}
          onClick={() => updateMaze(mazeParams)}
        >
          generate
        </Button>

        <IconButton
          color="inherit"
          aria-label="show path"
          onClick={toggleIsShowPath}
        >
          {isShowPath ? <IconHide /> : <IconShow />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="zoom out"
          onClick={() => updateSize(mazeParams?.size - 1)}
        >
          <IconMinus />
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="zoom in"
          onClick={() => updateSize(mazeParams?.size + 1)}
        >
          <IconPlus />
        </IconButton>

        <MenuButton updateMaze={updateMaze} updateMazeParams={updateMazeParams} />

      </Toolbar>
    </AppBar>
  );
};

export default Header;