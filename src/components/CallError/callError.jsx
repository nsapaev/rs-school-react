import React from 'react';

export class CallError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      throw new Error('error button triggered');
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          justifyContent: 'end',
          margin: '20px',
        }}
      >
        <button
          onClick={() => {
            this.setState({ hasError: true });
          }}
          style={{
            padding: '10px',
            height: '50px',
            width: '150px',
            background: '#D84444',
            color: 'white',
          }}
        >
          Error Trigger Button
        </button>
      </div>
    );
  }
}
