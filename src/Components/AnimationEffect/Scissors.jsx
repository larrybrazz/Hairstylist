import React from 'react'
import "./scissors.css"
const Scissors = () => {
  return (
    <div>
      <div class="container">
        <div class="scissors">
          <div class="half">
            <div class="blade"></div>
            <div class="handle"></div>
          </div>

          <div class="half">
            <div class="blade"></div>
            <div class="handle"></div>
          </div>

          <div class="joint"></div>
        </div>
      </div>
    </div>
  );
}

export default Scissors