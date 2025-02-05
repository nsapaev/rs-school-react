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

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return this.props.children;
  }
}
