import { Component } from 'react';

interface CallErrorStateInterface {
  hasError: boolean;
}

export class CallError extends Component<unknown, CallErrorStateInterface> {
  constructor(props: CallErrorStateInterface) {
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
          marginTop: '20px',
          maxWidth: '1200px',
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
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Error Trigger Button
        </button>
      </div>
    );
  }
}
