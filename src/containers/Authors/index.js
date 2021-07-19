import React, { Suspense, lazy, useState } from 'react';

const AddAuthor = lazy(() => import('./AddAuthor'));

export default function Authors() {
  const [formVisible, setFormVisible] = useState(false);

  console.log('changing')
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => setFormVisible(visibele => !visibele)}
      >
        Add author
      </button>
      <h2>Authors</h2>
      {
        formVisible ?
          (
            <Suspense fallback={'Loading...'}>
              <AddAuthor />
            </Suspense>
          )
          :
          null
      }
    </div>
  )
}
