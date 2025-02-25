import { Component, ErrorInfo } from 'react';
interface ErrorBoundaryStateInterface {
  hasError: boolean;
}

interface ErrorBoundaryPropsInterface {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryPropsInterface,
  ErrorBoundaryStateInterface
> {
  constructor(props: ErrorBoundaryPropsInterface) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  clickHandler = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            gap: '10px',
          }}
        >
          {this.props.fallback}
          <button
            style={{
              backgroundColor: '#f08a5d',
            }}
            onClick={this.clickHandler}
          >
            back
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
