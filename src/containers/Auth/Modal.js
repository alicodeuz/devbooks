import React from 'react'

export default function Modal({ visible, hideModal }) {
  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <h2>I am modal</h2>
      <button onClick={hideModal}>Close</button>
    </div>
  )
}
