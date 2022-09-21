import React, { useState } from "react";
import { components } from "react-select";
import  Select from "react-select";
import './App.css';



const colourOptions = [
  { label: 'white', value: 'white' },
  { label: 'black', value: 'black' },
  { label: 'blue', value: 'blue' },
  { label: 'red', value: 'red' },
  { label: 'green', value: 'green' },
  { label: 'voilet', value: 'voilet' },
  { label: 'brown', value: 'brown' },
  { label: 'orange', value: 'orange' },
  { label: 'maroon', value: 'maroon' },
  { label: 'aqua', value: 'aqua' },
  { label: 'pink', value: 'pink' },
  { label: 'purple', value: 'purple' },
  { label: 'Crimson', value: 'Crimson' },
]

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function App() {
  const [state, setState] = useState({
    optionSelected: null

})
const handleChange = (selected) => {
setState({
    optionSelected: selected
})

};

  
  return (
    <div className="App">
      <h1>Voiz Assignment</h1>
     
      <span >
          <Select
          className="add"
          options={colourOptions}
          onChange={handleChange}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
              Option
            }}
            />
        </span>
     
    </div>
  );
}

export default App;
