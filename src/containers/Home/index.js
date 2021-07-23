import React, { createRef, Profiler, useRef } from 'react'
import Books from '../Books';

export default function Home() {
  const parentRef = createRef('bbb');
  const bookRef = useRef('aaa');
  const handleOnRender = (id, phase, a, b) => {
    console.log('ID', id)
    console.log('Phase', phase)
    console.log('Actual time for rendering changes', a)
    console.log('Whole app', b)
    console.log('ID', id)
  }
  return (
    <div>
      <Profiler id="books-profiler" onRender={handleOnRender}>
        <Books ref={bookRef} />
      </Profiler>

    </div>
  )
}
