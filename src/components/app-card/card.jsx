import React, { useState } from "react";
import "./card.scss";

function Card({ header, price, speed, note, color }) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <>
      <div
        className={`card ${pressed ? "selected" : ""}`}
        onClick={handleChange}
      >
        <div className="card-header" style={{ backgroundColor: color }}>
          <div className="card-header">{header}</div>
        </div>
        <div className="card-body" style={{ backgroundColor: color }}>
          <div className="card-price">
            <span className="sup">руб </span>
            <span className="size">{price}</span>
            <span className="sub"> /мес</span>
          </div>
        </div>
        <div className="card-speed">{speed}</div>
        <div className="card-footer">
          <div className="card-note">{note}</div>
        </div>
      </div>
    </>
  );
}

export default Card;

/* class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
  }

  handleChange = () => {
    this.setState({ pressed: !this.state.pressed });
  };

  render() {
    const { header, price, speed, note, color } = this.props;
    return (
      <>
        <div
          className={`card ${this.state.pressed ? "selected" : ""}`}
          onClick={this.handleChange}
        >
          <div className="card-header" style={{ backgroundColor: color }}>
            <div className="card-header">{header}</div>
          </div>
          <div className="card-body" style={{ backgroundColor: color }}>
            <div className="card-price">
              <span className="sup">руб </span>
              <span className="size">{price}</span>
              <span className="sub"> /мес</span>
            </div>
          </div>
          <div className="card-speed">{speed}</div>
          <div className="card-footer">
            <div className="card-note">{note}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Card; */
