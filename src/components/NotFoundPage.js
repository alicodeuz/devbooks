import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not found</p>
      <Link to="/" className="btn btn-lg btn-primary">Go Home Page</Link>
    </div>
  )
}
