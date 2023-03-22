import React from "react";

class GeekScore extends React.PureComponent {
  render() {
    const { score, total = Math.max(1, score) } = this.props;

    return (
      <div>
        <h6>Geeks Score</h6>
        <span>{Math.round((score / total) * 100)}%</span>
      </div>
    );
  }
}
export default GeekScore;
