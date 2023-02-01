import * as React from 'react'
import PropTypes from 'prop-types'
import Slider, { SliderThumb } from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

function ValueLabelComponent(props) {
  const { children, value } = props

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  )
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
}

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
const marks = [
  {
    value: 2000,
  },
  {
    value: 20,
  },
  {
    value: 50,
  },
  {
    value: 99999,
  },
]
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: 'dark',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

export default function CustomizedSlider() {
  return (
    <Box sx={{ width: 180 }}>
      <Box sx={{ m: 3 }} />
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[20, 40]}
        valueLabelDisplay="on"
        marks={marks}
        min={2000}
        max={9999}
      />
    </Box>
  )
}
