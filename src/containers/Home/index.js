import React, { createRef, Profiler, useRef } from 'react'
import Books from '../Books';
import Slider from './Slider';

export default function Home() {
  const bookRef = useRef('aaa');

  return (
    <div>
      <Slider />
      <Books ref={bookRef} />
    </div>
  )
}
