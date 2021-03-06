import React from 'react';
import VerticalBreak from './VerticalBreak';

const StartScreen = ({ highScore, onStart }) => {
  return (
    <div className="Screen move-into-view">
      <div id="title">🧠
        <div>
          <span style={{color: '#81d2eb'}}>brain</span><span style={{color: '#65b2c9'}}>cache</span>
        </div>
      </div>
      <div className="boxed-text">How many words can you remember?</div>
      <VerticalBreak size="m" />
      <div className="flex-row">Your best score: <span className="level-number-indicator">{highScore}</span></div>
      <VerticalBreak size="m"/>
      <div className="boxed-text content">
        <ul>
          <li>Words will appear on the screen.</li>
          <li>Select the one you haven't seen.</li>
          <li>Don't select any words that you've seen before, or you'll lose a life.</li>
          <li> Most people score somewhere between 50 and 200.</li>
        </ul>
      </div>
      <VerticalBreak size="m"/>
      <button className="stylish-button menu-button" onClick={onStart}>Start</button>
    </div>
  )
}

export default StartScreen;