import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import styles from '../../../styles';

const RangeSlider = ({
  text, names, values, min, max, onChange, buttonValue, Icon
}) => {

  const handleClick = () => {
    onChange({ [text]: ++buttonValue > 3 ? 0 : buttonValue }, true);
  };

  const handleChange = (e, values) => {
    onChange({ [names[0]]: values[0], [names[1]]: values[1] });
  };

  return (
    <div>
      <div style={styles.rangeSliderInfo}>
        <Typography align="left">{text}:</Typography>

        <Button color="primary" onClick={handleClick}>
          <div style={styles.rangeSliderIcon(buttonValue)}>
            <Icon color="#3f51b5" />
          </div>
        </Button>

        <Typography id={text} align="center">
          {values[0]} {values[1]}
        </Typography>
      </div>


      <Slider
        value={values}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby={text}
      />
    </div>
  )
};

export default RangeSlider;