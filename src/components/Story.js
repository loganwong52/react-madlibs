import React from 'react'

function Story(props) {
  // return a paragraph containing
  // the MadLib story with fill-in-the-blanks
  const renderStory = () => {
    return <p id="selectedMadLib-getText">{props.text}</p>
  }

  // render
  return (
    <div id="div-story">
      {renderStory()}
    </div>
  )
}

export default Story
