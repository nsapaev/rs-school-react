import React, { useState } from 'react';

export const CallError: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>();

  if (hasError) {
    throw new Error('error button triggered');
  }

  return (
    <button
      onClick={() => {
        setHasError(true);
      }}
      style={{
        padding: '10px',
        height: '50px',
        width: 'auto',
        background: '#D84444',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Error Trigger Button
    </button>
  );
};
