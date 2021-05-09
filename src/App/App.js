import React from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, Zira.</h1>
      <p>
        Node Env: <b>{process.env.NODE_ENV}</b>
      </p>
      <p>
        Mode: <b>{process.env.MODE}</b>
      </p>
      <p>
        is prod? <b>{process.env.__PROD__.toString()}</b>
      </p>
      <p>
        is dev? <b>{process.env.__DEV__.toString()}</b>
      </p>
      <p>
        is tests? <b>{process.env.__UAT__.toString()}</b>
      </p>
    </>
  );
}
