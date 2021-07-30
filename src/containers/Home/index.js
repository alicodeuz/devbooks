import React, { createRef, Profiler, useRef } from 'react'
import Books from '../Books';

export default function Home() {
  const bookRef = useRef('aaa');

  return (
    <div>
      <Books ref={bookRef} />
    </div>
  )
}
