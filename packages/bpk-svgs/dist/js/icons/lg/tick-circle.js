import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5.855 6.992l-6.496 7.406a1.198 1.198 0 0 1-1.691.115L4.21 11.444a.601.601 0 0 1-.059-.848l.788-.906a.6.6 0 0 1 .847-.059l2.374 2.126a.24.24 0 0 0 .339-.023l5.55-6.324a.6.6 0 0 1 .847-.057l.904.791a.603.603 0 0 1 .055.848z" /></svg>;
  }

}