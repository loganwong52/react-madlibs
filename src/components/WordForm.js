import React from 'react'

function WordForm(props) {
  // render
  // Returns a series of inputs, 1 for each word in word.
  // placeholder tells the user what they should enter. 
  // The placeholder originates from word.label
  // whenever user types something in the input box, their input shows
  // up in the paragraph blank line
  // Map the userinput on to the word that should be appropiately updated in the Mad Libs data
  const renderInputs = () => {
    let elements = []
    for (let i = 0; i < props.words.length; ++i) {
      elements.push(
        <div key={i}>
          <input
            type="text"
            placeholder={`Enter a ${props.words[i].label}`}
            onChange={(word) => props.updateMadLibWord(i, word.target.value)}
          />
        </div>
      )
    }
    return elements
  }

  return (
    <div id="div-words">
      {renderInputs()}
    </div>
  )
}

export default WordForm
