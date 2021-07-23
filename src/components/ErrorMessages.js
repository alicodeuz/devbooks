import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ErrorMessages = ({ message }) => {
  const [timerCount, setTimerCount] = useState(0);
  const timer = () => setTimerCount(0);
  const handleTimer = () => setTimeout(timer, 2000);

  useEffect(() => {
    if (message) {
      setTimerCount(true);
      handleTimer();
    }
    return () => clearTimeout(handleTimer);
  }, [message]);

  if (!message || !timerCount) {
    return null
  }

  return createPortal(
    <div>
      <h2>I AM ERROR MESSAGE</h2>
    </div>,
    document.getElementById('error-messages')
  )
}

export default ErrorMessages;
