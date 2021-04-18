import React from 'react';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { IconPlus, IconMinus } from '../../../assets/icons';
import styles from '../../../styles';

const SimpleSlider = ({ text, name, value, min, max, onChange, reset }) => {

  const handleChange = (e, value) => {
    onChange({ [name]: value }, reset);
  };

  return (
    <div>
      <div style={styles.simpleSliderInfo}>
        <Typography id={text} align="left">{text}: {value}</Typography>

        <ButtonGroup color="primary">
          <Button
            onClick={() => handleChange(null, --value >= min ? value : min)}
          ><IconMinus color="#3f51b5" /></Button>

          <Button
            onClick={() => handleChange(null, ++value <= max ? value : max)}
          ><IconPlus color="#3f51b5" /></Button>
        </ButtonGroup>
      </div>

      <Slider
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby={text}
      />
    </div>
  )
};

export default SimpleSlider;