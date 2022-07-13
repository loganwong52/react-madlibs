import React from 'react'

function Selector(props) {

  // event handler
  function handleChange(evt) {
    let madLibNumber = evt.currentTarget.value
    props.setSelectedMadLib(props.data[madLibNumber])
  }

  // render
  // Select options' value is a single number, representing
  // their position in MadLibsData. It's used to render the
  // Story in handleChange
  const renderChoices = () => {
    let elements = []
    for (let i = 0; i < props.data.length; ++i) {
      elements.push(
        <option key={`madlib-${i}`} value={i} >
          {props.data[i]["title"]}
        </option>
      )
    }
    return elements
  }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange={handleChange}>
        {renderChoices()}
      </select>
    </div >
  )
}

export default Selector