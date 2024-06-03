import React from "react"
import "./Quiz.css"

const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>Which device is required for the Internet connection?</h2>
      <ul>
        {/* Used li*4 to make 4 li below */}
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}
export default Quiz