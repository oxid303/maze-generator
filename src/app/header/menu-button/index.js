import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '../menu';
import { IconMenu } from '../../../assets/icons';
import styles from '../../../styles';

const MenuButton = ({ updateMaze, updateMazeParams }) => {

  let [isShowMenu, setIsShowMenu] = React.useState(false);

  const menuRef = React.useRef();
  const buttonRef = React.useRef();

  React.useEffect(() => {
    const menuEventHandler = e => {
      if (!isShowMenu) return;

      const menuNode = menuRef.current;
      const buttonNode = buttonRef.current;

      if ((menuNode && menuNode.contains(e.target)) ||
        (buttonNode && buttonNode.contains(e.target))) {
        return;
      }
      setIsShowMenu(false);
    }

    if (isShowMenu) document.addEventListener('mousedown', menuEventHandler);
    else document.removeEventListener('mousedown', menuEventHandler);

    return () => {
      document.removeEventListener('mousedown', menuEventHandler);
    };
  }, [isShowMenu]);

  const toggleOpened = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div>
      <IconButton
        ref={buttonRef}
        color="inherit"
        aria-label="menu"
        onClick={toggleOpened}
      >
        <IconMenu />
      </IconButton>

      <div ref={menuRef} style={styles.isShowMenu(isShowMenu)}>
        <Menu
          updateMaze={updateMaze}
          updateMazeParams={updateMazeParams}
          setIsShowMenu={setIsShowMenu}
        />
      </div>
    </div>
  );
};

export default MenuButton;