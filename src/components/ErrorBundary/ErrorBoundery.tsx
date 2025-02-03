import React from 'react';

interface ErrorBoundaryStateInterface {
  hasError: boolean;
}

interface ErrorBoundaryPropsInterface {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryPropsInterface,
  ErrorBoundaryStateInterface
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return this.props.children;
  }
}
