import React, {useState} from 'react'

const bootTime = Date.now()

const Time = ({ pageContext }) => {
  const [state, setState] = useState({ ...pageContext, bootTime, clickTime: ''})
  const handleclick = () => {
    const clickTime = Date.now()
    setState(state => ({ ...state, clickTime }))
  }
  return <div>
    <h1>Time</h1>
      <p>Build: <span>{state.buildTime}</span></p>
      <p>Boot: <span>{state.bootTime}</span></p>
      <p>
        <button onClick={handleclick}>Click</button>: <span>{state.clickTime}</span>
      </p>
  </div>
}

export default Time