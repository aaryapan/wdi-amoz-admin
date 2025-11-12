import React, { Component, ReactNode } from 'react';
import { styled } from '@/styles/theme';

const ErrorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  minHeight: '400px',
});

const ErrorTitle = styled('h2', {
  fontSize: '$2xl',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$4',
});

const ErrorMessage = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  textAlign: 'center',
  marginBottom: '$6',
});

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.message || 'An unexpected error occurred'}
          </ErrorMessage>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

