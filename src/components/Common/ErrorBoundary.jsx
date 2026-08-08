import { Component } from "react";
import "./ErrorBoundary.css";

// React only supports error boundaries as classes — no hook equivalent.
// Without this, any render error blanks the whole page to white with
// nothing but a console stack trace, which is exactly the failure mode
// this book kept getting mistaken for a deployment bug.
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("[Book] Render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <p className="error-boundary__eyebrow">Something went wrong</p>
          <h1 className="error-boundary__title">This page hit a snag.</h1>
          <p className="error-boundary__text">
            Reloading usually fixes it. If it keeps happening, the console has the details.
          </p>
          <button
            type="button"
            className="error-boundary__button"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
