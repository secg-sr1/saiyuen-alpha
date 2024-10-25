import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useStore } from './store/useStore.jsx';
import { Switch } from '@mui/material';

export default function RowRadioButtonsGroup() {

  const [selectRadio, setSelectRadio] = useState('RGB')

  const setValue = useStore(state => state.setValue);


  const { showTrace, setShowTrace } = useStore(state => ({ showTrace: state.showTrace, setShowTrace: state.setShowTrace }));

  const handleRadioChange = (event) => {
    setSelectRadio(event.target.value);
    setValue(event.target.value);

  }

  const handleTraceToggle = (event) => {
    setShowTrace(event.target.checked)
  }



  console.log(selectRadio);

  return (
    <FormControl> 
      <FormLabel id="demo-row-radio-buttons-group-label" style={{color:'whitesmoke'}}>Layout</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{color: 'white'}}
        defaultValue="RGB"
        onChange={handleRadioChange}
      >
        <FormControlLabel value="RGB" control={<Radio style={{color:'white'}}/>} label="RGB" />
        <FormControlLabel value="Detections" control={<Radio style={{color:'white'}}/>} label="Detections" />
        <FormControlLabel value="Clusters" control={<Radio style={{color:'white'}}/>} label="Clusters" />
        <FormControlLabel value="Trace" control={<Switch color="error" checked={showTrace} onChange={handleTraceToggle} />} 
          label="Trace"
        />
      
      </RadioGroup>
    </FormControl>
  );
}
