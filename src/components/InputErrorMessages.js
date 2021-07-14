import React from 'react';
import Loader from './Loader';

export default function InputErrorMessages({ type, errorObj }) {
  console.log(type, errorObj)
  // if (type !== errorObj.type) {
  //   return null
  // };

  return (
    <div className="has-error">
      {errorObj.message}
      <Loader loading={true} type={type} />
    </div>
  )
}
